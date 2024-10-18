let num2= ['1', '10', '2', '3', '5', '5', '10'];
let res= num2.filter((item, index)=>{
    return num2.indexOf(item) === index;
})
console.log(res);