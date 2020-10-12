import SerialPort from 'serialport'
import AxiosUtil from './axios-util.mjs'

export default class PortHandlerUtil {

    static build() {

        return new Promise(function (resolve, reject) {
            PortHandlerUtil.getActivePort().then((port) => {
                if (!port) {
                    throw "ALERT: No valid port detected."
                }

                let baudRate = parseInt(process.env.BAUD_RATE)

                const serialPort = new SerialPort(port.path, { baudRate: baudRate })

                serialPort.on("data", function (data) {
                    console.log("Data: " + data)
                    try {
                        let dataNormalized = data.replace(' kg', '')
                        let floatValue = parseFloat(dataNormalized)
                        if (floatValue > 0) {
                            AxiosUtil.post(data)
                        }
                    } catch(exc) {
                        
                    }
                    
                });

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
