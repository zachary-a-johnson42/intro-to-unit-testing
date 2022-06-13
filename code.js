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

function isVowel(char){
    //refactor this using toUpperCase
    switch(char) {
        case "A":
            return true
            break;
        case "E":
            return true
            break
        case "I":
            return true
            break;
        case "O":
            return true
            break;
        case "U":
            return true
            break;
        case "a":
            return true
        break;
        case "e":
            return true
        break;
        case "i":
            return true
        break;
        case "o":
            return true
        break;
        case "u":
            return true
        break;
        default:
            return false
            break;
    }
}

