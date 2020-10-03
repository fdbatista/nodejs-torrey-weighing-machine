import SerialPort from 'serialport'
import LogUtil from '../src/util/log-util.js'
import MySerialPort from './src/serial-port/serial-port.js'

var lastData = null

const port = new SerialPort('COM4', {
    baudRate: 115200
})

function log(data) {
    console.log(data);
}

port.on("data", function (data) {
    let strData = data.toString().trim();
    if (strData !== lastData && strData !== "0") {
        LogUtil.log("Port data: " + data);
        lastData = strData;
    }
});

port.on("open", function () {
    log("Port open");
});

port.on("error", function (error) {
    LogUtil.log(error);
});

port.on("close", function () {
    log("Port closed");
});

function write() {
    port.write("P\n");
}

setInterval(write, 1000);
