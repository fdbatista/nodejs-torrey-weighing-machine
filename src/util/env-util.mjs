export default class EnvUtil {

    static getComPort() {
        return process.env.COM_PORT
    }

    static getBaudRate() {
        return parseInt(process.env.BAUD_RATE)
    }

    static getReadFrequencyInMillis() {
        return parseInt(process.env.READ_INTERVAL_SECONDS) * 1000
    }

}
