// var num = prompt('enter your marks');
// var passMarks = prompt('enter pass mark');
// if(num > passMarks){
//     alert('you are pass');
// }
// else{
//     alert('you are fail');
// }

while (1) {
    var bankAmount = prompt('enter your bank amount');
    if (isNaN(Number(bankAmount))) {
        continue;
    }
    else {
        var mblPrice = prompt('enter mobile price');
        alert(bankAmount);
        if (Number(bankAmount) > Number(mblPrice)) {
            alert('can afford');
        }
        else {
            alert('cannot  afford');
        }
        break;



    }

}