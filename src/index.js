import express from 'express'
import cors from "cors"
import http from 'http'

import { Server } from 'socket.io'
import { createServer } from 'http'

const app = express()
app.use(cors())
app.use(express.json())

const httpServer = createServer(app)

const io = new Server(httpServer, { allowEI03: true })

io.on('connection', socket => {
    console.log(socket.id)

    socket.on("message", () => {
        console.log("whatever")
    })
})


httpServer.listen(3030, () => {
    console.log("Server listening on port 3030")
})