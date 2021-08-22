const os = require('os');

console.log(`this os(EOL) === '\\n' => ${os.EOL === '\n'}`)
console.log(`this os(EOL) === '\\r\\n' => ${os.EOL === '\r\n'}`)

console.log(`os.totlamem(): ${os.totalmem()}`);
console.log(`os.freemem(): ${os.freemem()}`);
console.log(`os.type(): ${os.type()}`);
console.log(`os.userInfo()`);
console.log(os.userInfo());
console.log(`os.cpus()`);
console.log(os.cpus());
console.log(`os.homedir(): ${os.hostname()}`);
console.log(`os.hostname(): ${os.hostname()}`);
