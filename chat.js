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





})