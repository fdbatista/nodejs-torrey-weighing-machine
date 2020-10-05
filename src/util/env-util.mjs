export default class EnvUtil {

    static getReadFrequencyInMillis() {
        return parseInt(process.env.READ_INTERVAL_SECONDS) * 1000
    }

}
