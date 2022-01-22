const fs = require('fs');

// async
console.log('---- START1 ----');
fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});
console.log('---- END1 ----');

// sync
console.log('---- START2 ----');
const data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('---- END2 ----');

// write data
// fs.writeFileSync()
fs.writeFile('output.txt', 'Hello, GBC', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Data written successfully...');
});

// append data
// fs.appendFileSync()
async function appendData(data) {
    try {
        await fs.writeFile('output.txt', data, () => { flag: 'a' }); // append with write
    } catch (error) {
        console.log('Error: ' + error);
    }
}
appendData('Hello, Hello, Hello');

// delete file
// fs.unlink('fileToDelete.txt', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File deleted...');
// });