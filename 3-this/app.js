function hello() {
    console.log(this);
    console.log(this === global);
}

class TestThis {
    constructor(number) {
        this.number = number;
    }
    classFunction() {
        console.log('====== class ======');
        console.log(this);
        console.log(this === global);
    }
}

hello();

const testThis = new TestThis(3);
testThis.classFunction();

console.log('------ global scope ------');
console.log(this === module.exports);