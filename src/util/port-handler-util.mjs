import SerialPort from 'serialport'

export default class PortHandlerUtil {

    static build() {
        const serialPort = new SerialPort(process.env.COM_PORT, { baudRate: parseInt(process.env.BAUD_RATE) })

        serialPort.on("data", function (data) {
            PortHandlerUtil.log("Data: " + data);
        });

        serialPort.on("open", function () {
            PortHandlerUtil.log("Port open");
        });

        serialPort.on("error", function (error) {
            PortHandlerUtil.log(error);
        });

        serialPort.on("close", function () {
            PortHandlerUtil.log("Port closed");
        });

        return serialPort;
    }

    static log(data) {
        console.log(data)
    }

}
