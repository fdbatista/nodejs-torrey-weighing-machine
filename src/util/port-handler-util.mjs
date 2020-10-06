import SerialPort from 'serialport'

export default class PortHandlerUtil {

    static build() {

        PortHandlerUtil.getActivePort().then((port) => {
            if (!port) {
                throw "ALERT: No valid port detected."
            }
            let baudRate = parseInt(process.env.BAUD_RATE)

            const serialPort = new SerialPort(port.path, { baudRate: baudRate })

            serialPort.on("data", function (data) {
                console.log("Data: " + data);
            });

            serialPort.on("open", function () {
                console.log("Port open");
            });

            serialPort.on("error", function (error) {
                console.log(error);
            });

            serialPort.on("close", function () {
                console.log("Port closed");
            });

            return serialPort;
        })
    }

    static getActivePort() {
        return new Promise(function (resolve, reject) {
            return SerialPort.list().then((ports) => {
                let devManufacturer = process.env.DEVICE_MANUFACTURER
                let devSerialNumber = process.env.DEVICE_SERIAL_NUMBER
                let port = ports.find(port => port.manufacturer === devManufacturer && port.serialNumber === devSerialNumber)

                resolve(port)
            })
        })
    }

    static getAvailablePorts() {
        return new Promise(function (resolve, reject) {
            return SerialPort.list().then((ports) => {
                let availablePorts = ports.filter(port => port.manufacturer && port.serialNumber)

                resolve(availablePorts)
            })
        })
    }

}
