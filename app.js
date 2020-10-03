import WeighingMachineHandler from './src/weighing-machine/weighing-machine-handler.js'

var portHandler = new WeighingMachineHandler()
portHandler.startReading(parseInt(process.env.READ_INTERVAL))
