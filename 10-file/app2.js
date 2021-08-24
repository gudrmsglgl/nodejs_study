const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file (덮어쓰기)
fs.writeFile('./text.txt', 'Node is Backend!')
  .catch(console.error);

// writing a file (이어쓰기)
fs.appendFile('./text.txt', '\ndo u know david?')
  .then(() => {
    fs.copyFile('./text.txt', './copytext.txt')
      .catch(console.error)
})
  .catch(console.error); 

// folder
fs.mkdir('sub-folder')
  .catch(console.error);

// 현재 경로에 있는 모든 파일
fs.readdir('./')
  .then(console.log)
  .catch(console.error);