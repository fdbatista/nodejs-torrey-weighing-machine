import PortHandlerUtil from '../util/port-handler-util.mjs'
import EnvUtil from '../util/env-util.mjs'

try {
    PortHandlerUtil.build().then((serialPort) => {

        console.log(serialPort)

        function write() {
            serialPort.write("P\n")
        }

        setInterval(write, EnvUtil.getReadFrequencyInMillis())
    })
} catch (error) {
    console.log(error)
}
