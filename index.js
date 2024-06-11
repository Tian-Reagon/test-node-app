// const fs = require('fs');  Old way of using a module
import * as fs from 'fs';
import * as cowsay from 'cowsay';
// import { say } from 'cowsay'; // you can also import individual functions from the package like this

console.log('choo choo');

// const words = ['unicorn', 'cupcake', 'rainbow', 'kitten']
// const output = words.join('\n');
// fs.writeFile('words.txt', output, fileWritten);

// function fileWritten() {
//     console.log('file written!');
// }

const output = cowsay.say({ text: 'mooooo' });
console.log(output);