const fs = require('fs');
const csv = require('csv-parser');

var files = ['canada.txt', 'usa.txt'];

files.forEach((file) => {
    fs.unlink(file, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File deleted...');
    });
});

var readStream = fs.createReadStream('input_countries.csv');
var writeStream_Canada = fs.createWriteStream('canada.txt');
var writeStream_Usa = fs.createWriteStream('usa.txt');

const title = 'country,year,population';
var canada_country = [];
var canada_year = [];
var canada_pop = [];
var usa_country = [];
var usa_year = [];
var usa_pop = [];

readStream
    .pipe(csv())
    .on('data', (row) => {
        const headers = Object.keys(row);
        if (row[headers[0]] === 'Canada') {
            console.log(row);
            canada_country.push(row[headers[0]]);
            canada_year.push(row[headers[1]]);
            canada_pop.push(row[headers[2]]);
        } if (row[headers[0]] === 'United States') {
            console.log(row);
            usa_country.push(row[headers[0]]);
            usa_year.push(row[headers[1]]);
            usa_pop.push(row[headers[2]]);
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed');

        writeStream_Canada.write(title);
        for (let i = 0; i < canada_country.length; i++) {
            writeStream_Canada.write(`\n${canada_country[i]},${canada_year[i]},${canada_pop[i]}`, () => { flag: 'a' });
        }

        writeStream_Usa.write(title);
        for (let i = 0; i < usa_country.length; i++) {
            writeStream_Usa.write(`\n${usa_country[i]},${usa_year[i]},${usa_pop[i]}`, () => { flag: 'a' });
        }

});