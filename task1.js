// Task 1:

// 1) Create a prompt asking for firstname and lastname
// 2) Output full name in alert box
// 3) Ask for gender and age
// 4) If the gender is male then the alert output in the format => 'Full Name is a male of age 20'
// 5)If the gender is female then the output should contain => 'Full Name is a female of age 20'
var firstName = prompt('enter first name'),
lastName = prompt('enter last name ');
alert(firstName + ' ' + lastName);
var gender = prompt('gender(male/female)'),
age = prompt('Age');
if(gender == 'male'){
    alert(firstName + ' ' + lastName + ' is a ' + gender + ' ' + 'of age ' + age);
}
else{
    alert(firstName + ' ' + lastName + ' is a ' + gender + ' ' + 'of age ' + age);
}
