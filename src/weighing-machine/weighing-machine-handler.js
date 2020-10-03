import SerialPort from 'serialport'
import LogUtil from '../util/log-util.js'

export default class WeighingMachineHandler {

    constructor(portName, baudRate) {
        const serialPort = new SerialPort(portName, { baudRate: baudRate })
        this.serialPort = serialPort

        this.lastData = ""

        this._subscribeToPortEvents()
    }

    _subscribeToPortEvents() {
        this._subscribeToDataEvent()
        this._subscribeToOpenEvent()
        this._subscribeToErrorEvent()
        this._subscribeToCloseEvent()
    }

    _subscribeToDataEvent() {
        this.serialPort.on("data", function (data) {
            let strData = data.toString().trim()
            if (strData !== this.lastData && strData !== "0") {
                LogUtil.log("Port data: " + data)
                this.lastData = strData
            }
        })
    }

    _subscribeToOpenEvent() {
        this.serialPort.on("open", function () {
            LogUtil.log("Port open")
        })
    }

    _subscribeToErrorEvent() {
        this.serialPort.on("error", function (error) {
            LogUtil.log(error)
        })
    }

    _subscribeToCloseEvent() {
        this.serialPort.on("close", function () {
            LogUtil.log("Port closed")
        })
    }

    startReading(secondsInterval) {
        setInterval(this.sendChar, secondsInterval * 1000)
    }

    _sendChar() {
        this.serialPort.write("P\n")
    }

}
