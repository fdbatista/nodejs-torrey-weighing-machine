export default class ParserUtil {

    static machineReadingToFloat(data) {
        try {
            let dataNormalized = String(data).replace(' kg', '').trim()
            return parseFloat(dataNormalized)
        } catch (exc) {
            return -1;
        }
    }

}
