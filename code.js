// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
//sayHello function
function sayHello(name) {
    if (name === undefined || typeof name === 'boolean') return 'Hello, World!';
    return `Hello, ${name}!`
}

function isFive(num) {
    if(num === 5 || parseInt(num) === 5) {
        return true;
    }
    else{return false}
}

function isEven(num) {
    if(num % 2 === 0) {
        return true
    }
    if(typeof num === "boolean") {
    return false}
    return false
}

