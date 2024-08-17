/* strams ar used to read or write sequencially basically when we have to handle and manipulate streeming data 
Writable - write sequentially 
ReadableStream -read
Duplex - for both read and write sequentially
TransformStream - where data can be modified when writing or reading

whats also interinteng is streams extend the event emitters class which simply means that we can use events like data amd on streams  */

const fs = require('fs')

/* 
const fileRead = fs.readFile('./content/big-file.txt', 'utf8', (err, res) => {
    console.log(res)
}) */

/* with streams and event here the data will be read in chunks*/

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) //controlls the size of buffer
// const stream = createReadStream('../content/big.txt', { highWaterMark: 90000,encoding: 'utf8' })
    
//const streams = fs.createReadStream('./content/big-file.txt')
const streams = fs.createReadStream('../content/big-file.txt',{encoding: "utf8"})
streams.on('data', (result) => {
    console.log(result)
})
streams.on('error', (err) => {
    console.log(err);
    
})