# nodejs-torrey-weighing-machine
Simple NodeJS-powered application for reading weight from Torrey's digital weighing machine.

### Setup
- Open a terminal and clone the repository (`git clone https://github.com/fdbatista/nodejs-torrey-weighing-machine`).
- CD into the folder (cd `nodejs-torrey-weighing-machine`).
- Install dependencies (`npm install`).
- Rename the `.env.example` file to `.env`.
- Edit the `.env` file and update the serial port name your weighing machine is connected to (`COM_PORT`) and the baudRate it works on (`BAUD_RATE`).
- The `READ_INTERVAL_SECONDS` variable will control how often you want to read the port data.
- In case you need to submit the weight to a remote API, you will have to update also the `ENDPOINT_URL` and the `API_KEY` to communicate with the server (this is still WIP).
- Run the application (`npm start`).

Happy coding :)
