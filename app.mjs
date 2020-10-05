import PortHandlerUtil from './src/util/port-handler-util.mjs'

const serialPort = PortHandlerUtil.build()

function write() {
    serialPort.write("P\n")
}

setInterval(write, 1000);
