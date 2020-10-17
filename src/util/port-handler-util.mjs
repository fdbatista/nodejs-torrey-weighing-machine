import SerialPort from 'serialport'
import AxiosUtil from './axios-util.mjs'
import ParserUtil from './parser-util.mjs'

export default class PortHandlerUtil {

    static build() {

        return new Promise(function (resolve, reject) {
            PortHandlerUtil.getActivePort().then((port) => {
                if (!port) {
                    throw "ALERT: No valid port detected."
                }

                let baudRate = parseInt(process.env.BAUD_RATE)

                var Readline = SerialPort.parsers.Readline
                var parser = new Readline("\r\n")

                parser.on("data", function (data) {
                    let machineWeight = ParserUtil.machineReadingToFloat(data)

                    console.log("Parsed weight: ", machineWeight)

                    if (machineWeight > 0) {
                        AxiosUtil.post(machineWeight)
                    }

                });

                const serialPort = new SerialPort(port.path, {
                    baudRate: baudRate,
                    parser: parser
                })

                serialPort.on("open", function () {
                    console.log("Port open")
                });

                serialPort.on("error", function (error) {
                    console.log(error)
                });

                serialPort.on("close", function () {
                    console.log("Port closed")
                });

                resolve(serialPort)
            })
        })

    }

    static getActivePort() {
        return new Promise(function (resolve, reject) {
            return SerialPort.list().then((ports) => {
                let vendorId = process.env.VENDOR_ID
                let productId = process.env.PRODUCT_ID
                let port = ports.find(port => port.vendorId === vendorId && port.productId === productId)

                resolve(port)
            })
        })
    }

    static getAvailablePorts() {
        return new Promise(function (resolve, reject) {
            return SerialPort.list().then((ports) => {
                let availablePorts = ports.filter(port => port.vendorId && port.productId)

                resolve(availablePorts)
            })
        })
    }

}
