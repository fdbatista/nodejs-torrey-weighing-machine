import PortHandlerUtil from './src/util/port-handler-util.mjs'
import EnvUtil from './src/util/env-util.mjs'

const serialPort = PortHandlerUtil.build()

function write() {
    serialPort.write("P\n")
}

setInterval(write, EnvUtil.getReadFrequencyInMillis());
