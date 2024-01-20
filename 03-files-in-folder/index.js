const fs = require('fs');
const path = require('path');
let fileName = [], extName = [], fileSizeKb = [];
const fileNames = fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  for (let i = 0; i < files.length; i++) {
    fileName.push(Object.values(files[i])[0])
    let strFileName = Object.values(files[i])[0]
    extName.push(path.extname(strFileName));
    fs.stat(path.join(__dirname, 'secret-folder', strFileName), (err, stats) => {
      if (err) {
        console.error(err);
        return
      }
      const fileSize = stats.size;
      const fileSizeKb = fileSize / 1024 + 'Kb';
      console.log(`${fileName[i]} - ${extName[i]} - ${fileSizeKb}`);
    })
  }
})

