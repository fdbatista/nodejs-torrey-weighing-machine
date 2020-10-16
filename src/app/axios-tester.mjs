import AxiosUtil from '../util/axios-util.mjs'
import EnvUtil from '../util/env-util.mjs'

function sendRequest() {
    let randomValue = Math.random().toFixed(3);
    
    AxiosUtil.post(randomValue)
}

setInterval(sendRequest, EnvUtil.getReadFrequencyInMillis());
