import PortHandlerUtil from '../util/port-handler-util.mjs'

PortHandlerUtil.getAvailablePorts().then((ports) => {
    console.log("Available ports:\n", ports)
})

PortHandlerUtil.getActivePort().then((port) => {
    console.log("Active port:\n", port)
})
