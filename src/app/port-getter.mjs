import PortHandlerUtil from '../util/port-handler-util.mjs'

PortHandlerUtil.getAvailablePorts().then((ports) => {
    console.log(ports.length > 0 ? ports : "ALERT: No valid ports detected.")
})
