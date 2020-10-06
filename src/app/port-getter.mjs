import PortHandlerUtil from '../util/port-handler-util.mjs'

PortHandlerUtil.getAvailablePorts().then((ports) => {
    if (ports.length > 0)
        console.log("Available ports:\n", ports)
    else
        console.log("ALERT: No available ports.")
    
    let activePort = PortHandlerUtil.getActivePort()
    
    if (activePort)
        console.log("Active port:\n", activePort)
    else
        console.log("ALERT: No connected device.")
})
