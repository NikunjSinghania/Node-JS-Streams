const fs = require('fs')

//const ws = fs.createWriteStream('blob.json')

const o = {
    a : 1
}

fs.truncateSync('blob.txt', 0)

fs.appendFileSync("blob.txt",
  "This is the appended text\n",
);
 