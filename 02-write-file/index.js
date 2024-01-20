const process = require('process')
const fs = require('fs')
const path = require('path')
const outputText = path.join(__dirname, 'output.txt')
const { stdin, stdout } = process;
const writeStream = fs.createWriteStream(outputText)

console.log('wake up neo and enter any text to console:');


stdin.on('data', (chunk) => {
  let input = chunk.toString().toLowerCase().trim()
  if (input === 'exit') {
    writeStream.end()
    stdin.pause()
    console.log('Your text was succesfully written in output file. go check it. good luck!');
  } else {
    writeStream.write(chunk)
  }
  console.log(input == 'exit');
})

stdin.on('end', () => console.log('End of input'))