import SerialPort from 'serialport'

export default class PortHandlerUtil {

    static build() {
        let port = process.env.COM_PORT
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

}
