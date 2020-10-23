import express from 'express';
import http from 'http'
import socketIo from 'socket.io'

const app = express();
const server = http.createServer(app)
const io = socketIo(server)
const PORT = 8090;

io.on('connection', (socket) => {
  console.log(socket);
})

server.listen(PORT, () => {console.log();})