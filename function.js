var firstNumber = prompt('enter first number'),
secondNumber = prompt('enter second number');
function add(a,b){
    return Number(a)+Number(b);
}
function multiply(a,b){
    return a*b;
}
function subtraction(a,b){
    if(Number(a)>Number(b)){
        return a-b;
    }
    else{
        return b-a;
    }
}
alert('addition=' + add(firstNumber,secondNumber));
alert('multiply=' + multiply(firstNumber,secondNumber));
alert('subtraction=' + subtraction(firstNumber,secondNumber));