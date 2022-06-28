const path = require('path')

const filePath = path.join('content','subfolder','test.txt')

const absolute = path.resolve(__dirname,'text.txt')

console.log(path.sep)
console.log(filePath)
console.log(path.basename(filePath))
console.log(absolute)