const express = require('express');
const http = require('http');

let app = express();
let server = http.Server(app);
let io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

let username = {};
let rooms = ['room1', 'room2', 'room3'];

io.sockets.on('connection', function (socket) {

    // socket.on('adduser', function (username) {

    // })
    // console.log(socket);

    console.log(Object.keys(socket));
    console.log('this is rooms', socket.rooms);

    socket.on('join room', function (data) {
        socket.join(data.room_id);
        console.log('this is room', socket.room);
        console.log('this is rooms', socket.rooms);
    })




})

// app.listen(8080, function () {
//     console.log('Server listening at 8080')
// })
server.listen(8080, () => {
    console.log('server listening at 8080');
})