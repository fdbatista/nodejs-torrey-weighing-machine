export default class EnvUtil {

    static getReadFrequencyInMillis() {
        let seconds = parseFloat(process.env.READ_INTERVAL_SECONDS)
        
        return seconds * 1000
    }

}
