const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
require('dotenv').config();

require('./socketClient');

const path = require('path');

app.use(express.static(path.join(__dirname + '/client/dist')));

app.get('/', (req, res) => {});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log('listening on port ' + port);
});
