import axios from 'axios'

export default class AxiosUtil {

    static sendingData = false
    static endpointUrl = `${process.env.ENDPOINT_URL}?api_key=${process.env.API_KEY}`
    static lastValue = 0.0

    static post(data) {

        console.log("Data to send: ", data)

        if (!this.sendingData && data != this.lastValue) {
            this.lastValue = data
            this.sendingData = true
            let url = `${this.endpointUrl}&weight=${data}`

            axios
                .post(url)
                .then(res => {
                    console.log(res.data)
                    this.sendingData = false
                })
                .catch(error => {
                    console.error(error)
                    this.sendingData = false
                })
        }
    }

}
