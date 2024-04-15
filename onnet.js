const express = require('express')
const fs = require('fs')
const zlib = require('zlib')

const app = express()

fs.createReadStream('./data.json').pipe(
    zlib.createGzip().pipe(
        fs.createWriteStream('./zip_data.zip')
    )
)

app.get('/',(req, res) => {
    const rs = fs.createReadStream('./data_new.json', 'utf-8')
    rs.on('data', (chunk) => {
        console.log(chunk);
        res.write(chunk)
    })

    rs.on('end', () => {
        console.log('Stream Ended');
        res.end()
    })
})

app.listen(8000, () => {
    console.log('Server On');
})