import WeighingMachineHandler from './src/weighing-machine/weighing-machine-handler.js'

var portHandler = new WeighingMachineHandler('COM4', 115200)
portHandler.startReading(1)
