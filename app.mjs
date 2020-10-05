import SerialPort from 'serialport'
import LogUtil from './src/util/log-util.mjs'
import PortHandlerFactory from './src/factory/PortHandlerFactory'

/*var lastData = null

const serialPort = new SerialPort(process.env.COM_PORT, { baudRate: parseInt(process.env.BAUD_RATE) })

serialPort.on("data", function (data) {
    let strData = data.toString().trim();
    if (strData !== lastData && strData !== "0") {
        LogUtil.log("Port data: " + data);
        lastData = strData;
    }
});

serialPort.on("open", function () {
    LogUtil.log("Port open");
});

serialPort.on("error", function (error) {
    LogUtil.log(error);
});

serialPort.on("close", function () {
    LogUtil.log("Port closed");
}); */

const serialPort = PortHandlerFactory.build()

function write() {
    serialPort.write("P\n");
}

setInterval(write, 1000);
