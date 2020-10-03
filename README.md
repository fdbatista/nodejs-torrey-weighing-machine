# nodejs-torrey-weighing-machine
Simple NodeJS-powered application for reading weight from Torrey's digital weighing machine.

### Setup
- Open a terminal and clone the repository (`git clone https://github.com/fdbatista/nodejs-torrey-weighing-machine`).
- CD into the folder (cd `nodejs-torrey-weighing-machine`).
- Install dependencies (`npm install`).
- Rename the `.env.example` file to `.env`.
- Edit the `.env` file and update the serial port name your weighing machine is connected to and the baudRate it works on. In the future, if you need to submit the weight to a remote endpoint, you will also have to set its URL (this is still WIP).
- Run the application (`npm start`).

Happy coding :)
