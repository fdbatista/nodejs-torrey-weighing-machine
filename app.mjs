import SerialPort from 'serialport'
import LogUtil from '../src/util/log-util.mjs'

var lastData = null

const serialPort = new SerialPort(process.env.COM_PORT, { baudRate: parseInt(process.env.BAUD_RATE) })

function log(data) {
    console.log(data);
}

serialPort.on("data", function (data) {
    let strData = data.toString().trim();
    if (strData !== lastData && strData !== "0") {
        LogUtil.log("Port data: " + data);
        lastData = strData;
    }
});

serialPort.on("open", function () {
    log("Port open");
});

serialPort.on("error", function (error) {
    LogUtil.log(error);
});

serialPort.on("close", function () {
    log("Port closed");
});

function write() {
    serialPort.write("P\n");
}

setInterval(write, 1000);
