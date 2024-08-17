const fs = require("fs").promises
//using the .promise is also same as below util library then no need to pass empty callback const second = await fs.readFile('./content/second.txt', 'utf8',(err, res) => { }) 
    //instead we can directly const second = await fs.readFile('./content/second.txt', 'utf8') like this
//const util = require("util")
//util.promisify()	It converts a method that returns responses using a callback function in a promise object.

//const readFilePromise = util.promisify(fs.readFile)

const getTextfile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}
getTextfile('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
    
//promise function calling with async and await
const test = async () => {
    try {
        const res = await getTextfile('./content/first.txt')
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

test()

//other way without promises we can write by using async await
const asyncexmple = async () => {
    try {
        const first = await fs.readFile('./content/first.txt', 'utf8')
        const second = await fs.readFile('./content/second.txt', 'utf8')
        await fs.writeFile('./content/merged.txt',
            `new files ${first} ${second}`,
            { flag: 'a' }
        )

        
        console.log('done')
    } catch (error) {
        console.log(error)
    }
}

asyncexmple()