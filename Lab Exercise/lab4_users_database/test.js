const str = "hello sir how are you";

const words = str.split('');

if (words[0].charCodeAt(0) == 104) {
    console.log('yes')
} else {
    console.log('no')
}