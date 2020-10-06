import SerialPort from 'serialport'

export default class PortHandlerUtil {

    static build() {

        let port = PortHandlerUtil.getActivePort()

        if (!port) {
            throw "ALERT: No valid port detected."
        }
        let baudRate = parseInt(process.env.BAUD_RATE)

        const serialPort = new SerialPort(port, { baudRate: baudRate })

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
    }

    static getActivePort() {
        PortHandlerUtil.getAvailablePorts().then((ports) => {
            let devManufacturer = process.env.DEVICE_MANUFACTURER
            let devSerialNumber = process.env.DEVICE_SERIAL_NUMBER

            console.log(ports)
            console.log(devManufacturer)
            console.log(devSerialNumber)

            let port = ports.filter(port => port.manufacturer === devManufacturer && port.serialNumber === devSerialNumber)

            return port
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
