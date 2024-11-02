const fs = require('fs');
fs.writeFile('hello.txt', 'Hello from Node.js!', (err) => {
    if (err) throw err;
    console.log('File created and saved!');
});