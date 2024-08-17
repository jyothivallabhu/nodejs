const fs = require("fs")
const http = require('http')

const server = http.createServer( (req, res)=>{
    /* const text = fs.readFileSync('./content/big-file.txt', 'utf8')
    res.end(text) */

    const filestream = fs.createReadStream('./content/big-file.txt', 'utf8')
    filestream.on('open', () => {
        //pipe is used to push the data from read stream to write stream
        filestream.pipe(res)
    })
    filestream.on('error', (err) => {
        res.end(err);
        
    })

})

server.listen(3000)