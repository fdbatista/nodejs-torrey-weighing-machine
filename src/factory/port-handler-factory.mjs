export default class PortHandlerFactory {

    static build() {
        const serialPort = new SerialPort(process.env.COM_PORT, { baudRate: parseInt(process.env.BAUD_RATE) })

        serialPort.on("data", function (data) {
            console.log("Port data: " + data);
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
