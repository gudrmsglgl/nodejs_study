const fs = require('fs');

// api 는 3가지 형태로 제공
// rename(...., callback(error, data))
// try { renameSync(....) } catch (e) {}
// promise.rename().then().catch(0)
try {
    fs.renameSync('./text.txt', './file-new.txt');
} catch (error) {
    console.log('err1');
    console.log(error);
}

fs.rename(
    './file-new.txt',
     './text.txt',
     (err) => {
         if (err) {
            console.log('err2');
            console.log(err);
            return
         }
         console.log('rename done');   
     }
)

fs.promises
  .rename('./file-new.txt', './text.txt',)
  .then(() => { console.log('promises_done'); })
  .catch((err) => {
      if (err) {
          console.log('promise err');
          console.log(err);
          return
      }
  });

console.log('before fs.rename()');
