import SerialPort from 'serialport'
import EnvUtil from './env-util.mjs'

export default class PortHandlerUtil {

    static build() {
        let port = EnvUtil.getCompPort()
        let baudRate = EnvUtil.getBaudRate()

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
