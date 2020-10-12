import axios from 'axios'

export default class AxiosUtil {

    static post(data) {
        let apiKey = process.env.API_KEY
        let url = process.env.ENDPOINT_URL += `?api_key=${apiKey}&weight=${data}`

        axios
            .post(url)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

}
