const fs = require('fs');

const title = 'sid, fnm, lnm, result';
fs.writeFileSync('student.csv', title);
fs.writeFileSync('student.csv', '\n1, Pritesh, Patel, Pass', { flag: 'a' });

fs.readFile('student.csv', (err, data) => {
    console.log(data.toString());
});