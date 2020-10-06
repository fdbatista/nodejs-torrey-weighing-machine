import axios from 'axios'

export default class AxiosUtil {

    static post(data) {
        let url = process.env.POST_ENDPOINT
        let jwt = process.env.JWT

        axios
            .post(url, {
                jwt: jwt,
                data: data
            })
            .then(res => {
                console.log(`Result: ${res.statusText}`)
            })
            .catch(error => {
                console.error(error)
            })
    }

}
