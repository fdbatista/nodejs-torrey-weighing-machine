import SerialPort from 'serialport'

export default class PortHandlerUtil {

    static build() {
        const serialPort = new SerialPort(process.env.COM_PORT, { baudRate: parseInt(process.env.BAUD_RATE) })

        serialPort.on("data", function (data) {
            log("Data: " + data);
        });

        serialPort.on("open", function () {
            log("Port open");
        });

        serialPort.on("error", function (error) {
            log(error);
        });

        serialPort.on("close", function () {
            log("Port closed");
        });

        return serialPort;
    }

    static log(data) {
        console.log(data)
    }

}
