import path from 'path'
import os from 'os'
import process from 'process'
import express from 'express'

const PORT = 3000
const IP_ADDRESS = Object.values(os.networkInterfaces()).flat().filter(item => {
    return !item.internal && item.family === 'IPv4'
}).find(Boolean).address

const webserver = express()

webserver.use('/', express.static(path.join(process.cwd(), './src')))
webserver.get('*', (request, response) => {
    response.sendFile(path.join(process.cwd(), './src/index.html'))
})


webserver.listen(PORT, '0.0.0.0', () => {
    console.log(`
    http://localhost:${PORT}
    http://${IP_ADDRESS}:${PORT}
    `)
})