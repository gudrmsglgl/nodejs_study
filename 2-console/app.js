console.log('logging...');
console.clear();

// log level
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');

// assert
console.assert(2 === 2, 'same!');
console.assert(2 === 3, 'not same!')

// print object
const student = { name: 'ellie', age: 20 , company: { cName: 'AC', cStartYear: 2010, }};
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: true, depth: 0 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}

a();
console.countReset('a function');
a();

// trace
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('3');
    console.trace();
}

f1();