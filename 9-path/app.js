const path = require('path');

// POSIX (Unitx: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);

console.log(`path.sep: ${path.sep}`);
console.log(`path.delimiter: ${path.delimiter}`);

// basename : 특정한 정보만 전달해주면 가져오는 함수
console.log(`path.basename(__filename): ${path.basename(__filename)}`);
console.log(`path.basename(__filename, '.js'): ${path.basename(__filename, '.js')}`);

// dirname : 디렉토리 확인
console.log(`path.dirname(__filename): ${path.dirname(__filename)}`);

// extension : 확장자명 확인
console.log(`path.extname(__filename): ${path.extname(__filename)}`);

// parse
const parsed = path.parse(__filename);
console.log(`path.parse(__filename):`);
console.log(parsed);
console.log(`parsed.root: ${parsed.root}`);
console.log(`parsed.name: ${parsed.name}`);
console.log(`parsed.base: ${parsed.base}`);

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsoulte?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder////////sub'));

// join
// bad code b/c window is not directory sep
console.log(__dirname + '/' + 'image');

// better code 
console.log(__dirname + path.sep + 'image');

// good code
console.log(path.join(__dirname, 'image'));