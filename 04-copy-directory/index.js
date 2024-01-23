
const fs = require('fs');
const fsPromises = require('node:fs/promises')
const path = require('path')
// const fsExtra = require('fs-extra')
const { copyFile } = require('node:fs/promises')
console.log('ребята проверяющие прошу подождите пожалуйста до завтра надеюсь я справлюсь с копированием файлов');

async function copyFile1(src, dest) {
  try {
    // const files = await fsPromises.readdir(src, { withFileTypes: true });

    await fsPromises.mkdir(dest, { recursive: true })

  } catch (err) {
    console.error(err)
  }
}

copyFile1(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'))
// console.log('sukablyat');
// console.log(path.join(__dirname, 'files'));
// console.log(path.join(__dirname, 'files-copy'));

// fsPromises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }).then(function () {
//   console.log('directory created');
//   return fsPromises.copyFile(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy')
//   )
// }).then(function () {
//   fsPromises.readdir(path.join(__dirname, 'files'), (err, files) => {
//     if (err) {
//       console.error(err)
//     }
//     files.forEach(file => {
//       fsPromises.copyFile(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'), file)
//     });
//   })
// })
//   .catch((err) => {
//     console.error(err)
//   })

