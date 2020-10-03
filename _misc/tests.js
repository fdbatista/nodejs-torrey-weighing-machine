const SerialPort = require('serialport')

const port = new SerialPort('COM4', {
    baudRate: 115200
});

function log(data) {
    console.log(data);
}

let Readline = SerialPort.parsers.Readline;
let parser = new Readline({ delimiter: '\n' });

port.pipe(parser);

parser.on("data", function () {
    log("Data: " + data);
});

port.on("open", function () {
    log("open");
});

port.on("data", function (data) {
    log("Data: " + data);
});

port.on("error", function (error) {
    log("Error: " + error);
});

port.on("close", function () {
    log("Closed");
});

function write() {
    port.write("P\n");
}

setInterval(write, 1000);

/*port.on("open", function () {
    console.log("open");

    port.on("data", function (data) {
        console.log("data received: " + data);
    });

    port.write("P\n", function (results) {
        console.log("results: " + results);
    });

    if (port.isOpen) {
        port.close();
    }

}); */


/* port.open(function (err) {
    if (err) {
        console.log('Error opening port: ', err.message);
    }
}); */


/*
const Readline = require('@serialport/parser-readline')

const parser = port.pipe(new Readline({ delimiter: '\n' }))

parser.on("data", function (chunk) {
    valrec = chunk.toString();
    console.log(valrec);
}); */

/*port.on("open", () => {
    console.log('Port open');

    port.write("P\n", (err) => {
        if (err) {
            console.log('Error on write: \n', err.message);
        }
        else {
            console.log('Message written');
        }
    });
    if (port.isOpen) {
        port.close();
    }
}); */

//const parser = port.pipe(new Readline({ delimiter: '\n' }))

/* port.on("data", function (chunk) {
    valrec = chunk.toString();
    console.log(valrec);
}); */

/* port.on("data", function (data) {
    let dataString = Buffer.from(data).toString('hex')
    console.log('Data: \n', dataString)
}) */


/* const com = new SerialPort('COM4',
    {
        autoOpen: false,
        baudRate: 115200,
        dataBits: 8,
        stopBits: 1,
        Parity: 'none',
        flowControl: false
    },
    function (err) {
        if (err) {
            return console.log('Error: ', err.message)
        }
    },

)

com.open(function (error) {
    if (error) {
        console.log('Error while opening the port ' + error);
    } else {
        console.log('Port open');

        var sentData = 'P'

        try {
            com.write(sentData, function (err, result) {
                console.log(err);
                console.log(result);
            });
        } catch (error) {
            console.log('Error');
            console.log(error);
        }

        com.close();
        console.log('Port closed')

    }
}); */



/* serialPort.close()

serialPort.on ('open', function () {
    console.log("Open");
    serialPort.write(0x50);
    serialPort.on ('data', function( data ) {
        console.log("data" + data.toString());
    });
}); */


/* var WebSocket = require('ws')

const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
 */

/* const SerialPort = require('serialport')

try {
    var com = new SerialPort('COM3', {
        baudRate: 115200,
        databits: 8,
        parity: 'none'
    }, false);

    com.open(function (error) {
        if (error) {
            console.log('Error while opening the port ' + error);
        } else {
            console.log('Port opened');
            com.write('P', function (err, result) {
                if (err) {
                    console.log('Error while sending message : ' + err);
                }
                if (result) {
                    console.log('Response received after sending message : ' + result);
                }
            });
        }
    });
} catch (error) {
    console.log(error)
}
 */
/* var WebSocket = require('ws')

const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
 */