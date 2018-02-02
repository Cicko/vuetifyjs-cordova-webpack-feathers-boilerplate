import feathers from 'feathers'
import socketio from 'feathers-socketio'
import io from 'socket.io-client'
const socket = io('http://localhost:3030', { transports: ['websocket'] })

const app = feathers()
  .configure(socketio(socket))

export default app
