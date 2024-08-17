const http = require("http")

const server = http.createServer((req, res) => {
    res.end(`template literals string starting......`)
})

server.listen(3000)