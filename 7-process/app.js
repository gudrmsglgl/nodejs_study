const process = require('process');

console.log(`process.execPath: ${process.execPath}`);
console.log(`process.version: ${process.version}`);
console.log(`process.pid: ${process.pid}`);
console.log(`process.ppid: ${process.ppid}`);
console.log('process.platform: ');
console.log(process.platform);
console.log(`process.env: `);
console.log(process.env);
console.log('process.uptime(): ');
console.log(process.uptime());
console.log(`process.cwd(): ${process.cwd()}`);
console.log('process.cpuUsage():');
console.log(process.cpuUsage());

setTimeout(() => {
    console.log('setTimeout');
}, 0)

process.nextTick(() => {
    console.log('nextTick');
})

for (let i = 0; i < 1000; i++) {
    console.log(i);
}