//normal functiom
function add(first,second){
    return first+second;
}
console.log(add(5,8));


//anonymous function
const  add2 = function(first,second){
    return first+second;
}
console.log(add2(5,8));

//Arrow function
const add3 =(first,second)=>{
    return first+second;
}
console.log(add3(5,8));


//other
const square =(num) =>{
    return num*num;
}
console.log(square(6));

//other
const square1 =num =>num*num;
console.log(square(4));

//Application with array
const numbers =[2,4,6,8,10];
let squares=numbers.map(function(num){
    return num*num;
});
let square2=numbers.map(num=>num*num) ;


