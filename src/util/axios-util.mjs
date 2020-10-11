import axios from 'axios'

export default class AxiosUtil {

    static post(data) {
        let url = process.env.ENDPOINT_URL
        let secretKey = process.env.API_KEY

        axios
            .post(url, {
                api_key: secretKey,
                weight: data
            })
            .then(res => {
                console.log(`Result: ${res.statusText}`)
            })
            .catch(error => {
                console.error(error.code)
            })
    }

}
