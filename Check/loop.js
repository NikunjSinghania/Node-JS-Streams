const fs = require('fs')

//const ws = fs.createWriteStream('blob.json')

const o = {
    a : 1
}

fs.appendFileSync("blob.txt",
  "This is the appended text\n",
);
 