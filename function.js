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
function returnPosition(c,month){
    if(c< month.length || c>=1){
        return month[c-1];
    }
    else{
        return false;
    }
}
function getMonth(a){
    var month = ['jan','feb','march','april','may','june','july','agusth','sep','oct','nov','dec','jan'];
    return returnPosition(a,month);
}
function monthAlert(b){
    var month = getMonth(b);
    if(month){
        alert(`month is ${month}`);
    }
    else{
        alert(`incorrect input`);
    }
}
// var firstNumber = prompt('enter first number'),
// secondNumber = prompt('enter second number');
// alert('addition=' + add(firstNumber,secondNumber));
// alert('multiply=' + multiply(firstNumber,secondNumber));
// alert('subtraction=' + subtraction(firstNumber,secondNumber));
// alert(`sum is ${add(firstNumber,secondNumber)} 
// and multiplication is ${multiply(firstNumber,secondNumber)} 
// and subtraction is ${subtraction(firstNumber,secondNumber)}`);

// var monthNumber = prompt('enter number of month');
// monthAlert(monthNumber);


function name(){
    var name = ['sanjay','anup','milan','rajan'];
    var getPosition = prompt('enter position ');
    alert(`name = ${returnPosition(getPosition,name)}`);
}
name();