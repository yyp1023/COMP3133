console.log('Buffer Example');

console.log(__filename);
console.log(__dirname);

// Buffer.from(array)

console.log('---------------------');

let buf1 = Buffer.from('A Hello');
console.log(buf1);
console.log(buf1[0]);
console.log(buf1.toString());
console.log(buf1.length);

console.log('---------------------');

let str = '😊';
let buf2 = Buffer.from(str);
console.log(buf2);
console.log(buf2.length);
console.log(buf2[0]);
console.log(buf2.toString());
console.log(buf2.toString('utf8'));
console.log(buf2.toString('hex'));
console.log(buf2.toString('utf-16le'));

console.log('---------------------');

let buf3 = Buffer.alloc(10, 67);
console.log(buf3.toString());
buf3[0] = 65;
buf3[9] = 66;
console.log(buf3);
console.log(buf3.length);
console.log(buf3.toString());

let s = 'Hello';
buf3.write(s, 4, 2);
console.log(buf3.toString());

console.log('---------------------');

buf4 = Buffer.concat([buf3, Buffer.from('World')]);
console.log(buf4.toString());

