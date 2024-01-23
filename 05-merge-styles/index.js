const fs = require('fs');
const path = require('path');

async function createBundle() {
  const files = await fs.promises.readdir(path.join(__dirname, 'styles'), { withFileTypes: true });
  let content = '';

  for (let i = 0; i < files.length; i++) {
    const file = Object.values(files[i]).toString();
    if (path.extname(file) === '.css') {
      let pathFile = path.join(__dirname, 'styles', files[i].name)
      let contentFile = await fs.promises.readFile(pathFile, 'utf-8');
      content += contentFile + '\n'
    }
  }

  await fs.promises.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), content)

}
createBundle()
