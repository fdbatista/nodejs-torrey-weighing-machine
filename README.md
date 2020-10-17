# nodejs-torrey-weighing-machine
Simple NodeJS-powered application for reading weight from Torrey's digital weighing machine.

### Setup
- Open a terminal and clone the repository (`git clone https://github.com/fdbatista/nodejs-torrey-weighing-machine`).
- Go into the folder (cd `nodejs-torrey-weighing-machine`).
- Install dependencies (`npm install`).
- Rename the `.env.example` file to `.env`.
- Edit the `.env` file and update the variables `VENDOR_ID`, `PRODUCT_ID` and `BAUD_RATE` according to your device specifications. Executing `npm run list` will give you the list of devices attached to serial ports on your local machine. You can take `VENDOR_ID` and `PRODUCT_ID` from there. `BAUD_RATE` should be specified in your device's technical documentation.
- The `READ_INTERVAL_SECONDS` variable defines how many seconds you want to wait between one reading job and the next one.
- The `ENDPOINT_URL` and the `API_KEY` specify the parameters to communicate with the backend application receiving the readings.
- Run the application (`npm run start`) or make a test to verify the endpoint (`npm run test-axios`).

Happy coding :)
