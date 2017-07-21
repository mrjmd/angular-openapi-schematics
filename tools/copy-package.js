const fs = require('fs');
let pck = fs.readFileSync('package.json').toString();
fs.writeFileSync('dist/package.json', pck);
let collection = fs.readFileSync('collection.json').toString();
fs.writeFileSync('dist/collection.json', collection);