import PortHandlerUtil from '../util/port-handler-util.mjs'

PortHandlerUtil.getAvailablePorts().then((ports) => {
    console.log(ports.length > 0 ? ports : "ALERT: No available ports.")
    
    let activePort = PortHandlerUtil.getActivePort()
    console.log(activePort ? activePort : "ALERT: No connected device.")
})
