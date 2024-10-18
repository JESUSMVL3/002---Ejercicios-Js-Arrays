const number1= ['5', '1', '3', '2', '6', '7', '8', '11', '10'];
const number2= ['3', '9', '13', '19'];
const number3= ['4', '33', '100', '119'];
const array3 = number1.concat(number2, number3);
array3.sort(function(a, b){return a - b});
console.log(array3);
