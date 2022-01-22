const fs = require('fs');

var readStream = fs.createReadStream('inputStream.txt');
var msg = '';

readStream.on('data', (rawData) => {
    msg += rawData.toString();
    console.log(`Data event called... : ${rawData.toString()}`);
});

readStream.on('end', () => {
    console.log(`End : ${msg}`);
});

readStream.on('error', (err) => {
    console.log(`Error : ${err}`);
});

var writeStream = fs.createWriteStream('outputStream.txt');
writeStream.write('Hello1');
writeStream.write('Hello2');
writeStream.write('Hello3');

writeStream.on('finish', () => {
    console.log('Data write completed...');
});

writeStream.on('error', (err) => {
    console.log(`Error : ${err}`);
});

writeStream.end();