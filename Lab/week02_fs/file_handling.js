const fs = require('fs');

// r -> read only
// r+ -> read + write
// w -> write only
// w+ -> write + read
// a -> append
// ws -> write sync

fs.open('input.txt', 'r+', (err, fd) => {
    var buf = Buffer.alloc(10);

    // read the data
    fs.read(fd, buf, 0, buf.length, 0, (err, n, b) => {
        console.log(buf.toString());
        console.log(err, n, b.toString());
    });

    // write the data
    fs.write(fd, Buffer.from('Hello Buffer'), (err, n, b) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Buffer got written to file...');
        fs.close(fd, () => {
            console.log("File got closed...");
        });
    });
});