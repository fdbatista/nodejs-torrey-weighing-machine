import AxiosUtil from '../util/axios-util.mjs'

function sendRequest() {
    let randomValue = Math.random().toFixed(3);
    
    AxiosUtil.post(randomValue)
}

setInterval(sendRequest, 3000);
