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


    // console.log('this is clients data', socket.client);
    console.log('this is socket id', socket.id);


    socket.on('join room', function (data) {
        // socket.join(data.room_id);
        // console.log('this is rooms', socket.rooms);
        // console.log('this is socket id', socket.id);
    })

    // setInterval(function () {
    //     console.log('this is rooms', socket.rooms);
    // }, 10000);

    socket.on('switch room', function (data) {
        let room = JSON.parse(data);
        socket.join(room.room_id);
        console.log('this is rooms', socket.rooms);
        // socket.to(room.room_id).emit('switch room', JSON.stringify({
        //     room: room.room_id
        // }))
        socket.emit('switch room', JSON.stringify({
            room: room.room_id
        }))
    })

    socket.on("send message", function (data) {
        let message = JSON.parse(data);
        console.log('this is message room', message.room_id);
        console.log('this is the message', message.message);

        socket.to(room.room_id).emit('send message', JSON.stringify({

        }))
    })

    socket.on('show room', function (data) {
        console.log('this is show room', socket.rooms[data.room_id])
    });

    socket.on('specific lister', function (data) {

    })
})

// app.listen(8080, function () {
//     console.log('Server listening at 8080')
// })
server.listen(8080, () => {
    console.log('server listening at 8080');
})