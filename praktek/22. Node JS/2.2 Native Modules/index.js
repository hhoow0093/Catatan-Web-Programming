const { readFile } = require('node:fs/promises');

async function readData() {
    try {
        const data = await readFile('message.txt', 'utf-8')
        console.log(data);
        
    } catch (err) {
        console.log(err);
    }
}

readData();

// const fs = require('node:fs');

// fs.readFile('message.txt', 'utf-8', (data, err) => {
//     if (err) throw err;
//     console.log(data);
// });
