const fs = require('fs')
for (i = 0; i <= 100000;i++){
 fs.writeFileSync('./content/big-file.txt', `Hello world ${i}\n`,{flag:'a'})
}