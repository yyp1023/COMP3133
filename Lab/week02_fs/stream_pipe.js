const fs = require('fs');
const zlib = require('zlib');

var readStream = fs.createReadStream('inputStream.txt');
var writeStream = fs.createWriteStream('outputStream.txt');

readStream.pipe(writeStream);

// read -> compress -> save as gz
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('outputStream.txt.gz'));