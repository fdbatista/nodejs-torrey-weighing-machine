import axios from 'axios'

export default class AxiosUtil {

    static sendingData = false

    static post(data) {
        if (!this.sendingData) {
            let apiKey = process.env.API_KEY
            let url = process.env.ENDPOINT_URL += `?api_key=${apiKey}&weight=${data}`
            this.sendingData = true

            axios
                .get(url)
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
