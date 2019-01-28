// var text = document.getElementsByClassName('container1')[0];
// // var name = prompt('enter name =');
// text.children[0].innerText='sanjay';

var text = document.getElementsByClassName('container1')[0],
replace = document.getElementById('replace');

console.log(replace.innerHTML);

replace.innerHTML += '<p>sanjay</p>';
