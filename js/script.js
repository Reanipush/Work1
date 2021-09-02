let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 346;
}

showFirstMessage("heiurhgioeuhrgu");
console.log(num);

function calc(a, b) {
    return(a+b);
}

console.log(calc(5, 9));
console.log(calc(453, 9));
console.log(calc(57, 89));

function ret () {
    let num = 567;

    return num;

}

let logger = function(){
    console.log("hello");
};

logger();

const calcul = (a, b) => a+b;