const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const PORT = 3000;

// create server-side socket
const io = require('socket.io')(http);

app.use(cors());

// default express GET
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Socket Programming</h1>');
});

// get index.html
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// accept client request
io.on('connection', (socket) => {
    console.log('Connection created...');

    // send welcome message
    socket.emit('welcome', `Welcome to chat. Your ID is ${socket.id}`);

    // new message from client
    socket.on('message', (data) => {
        // only send to current client
        // socket.emit('newMessage', data);

        const msg = {
            sender: socket.id,
            message: data
        };

        // send globally
        // io.sockets.emit('newMessage', msg);

        // send globally except sender
        socket.broadcast.emit('newMessage', msg);
    });

    // join new room
    socket.on('join', (roomName) => {
        socket.join(roomName);
        const msg = {
            sender: socket.id,
            message: 'Joined the room successfully'
        };
        io.sockets.emit('newMessage', msg);
    });

    socket.on('room_message', (data) => {
        const msg = {
            sender: socket.id,
            message: data.message
        };
        // direct message / 1 to 1 message using socket id
        // socket.broadcast.to('socketid').emit('message', msg);
        // io.to('socketidtosend').emit('message', msg);

        // to all client in room
        socket.broadcast.to(data.room).emit('newMessage', msg);
    });

    // disconnected
    socket.on('disconnect', () => {
        console.log(`${socket.id} client disconnected...`);
    });
});

// start http server
http.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});