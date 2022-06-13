// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
//sayHello function
function sayHello(name) {
    if (name === undefined || typeof name === 'boolean') return 'Hello, World!';
    return `Hello, ${name}!`
}