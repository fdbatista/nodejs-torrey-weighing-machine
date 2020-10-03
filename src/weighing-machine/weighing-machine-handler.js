import SerialPort from 'serialport'
import LogUtil from '../util/log-util.js'

export default class WeighingMachineHandler {

    constructor() {
        this._initSerialPortHandler()
        this.lastData = ""
        this._subscribeToPortEvents()
    }

    _initSerialPortHandler() {
        const serialPort = new SerialPort(process.env.COM_PORT, { baudRate: parseInt(process.env.BAUD_RATE) * 1000 })
        this.serialPort = serialPort
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
        setInterval(this._sendChar, secondsInterval * 1000)
    }

    _sendChar() {
        try {
            this.serialPort.write("P\n")
        } catch (exc) {
            LogUtil.log(exc.name + ': ' + exc.message)
        }
    }

}
