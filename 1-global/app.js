const fs = require('fs');

global.hello = () => {
    console.log('Hello');
}

global.hello();
hello();