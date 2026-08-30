//TERNERY OPERATOR
let num=4;
let result =num%2==0?'even':'odd';
console.log(`the num is ${result}.`);

//GUARD OPERATOR
//let username='okokok';
//let fallbackvalue='rubu';
//let greeting=`welcome ${username||fallbackvalue}`;
//console.log(greeting);

//DEFAULT OPERATOR
let username=" ";
let fallbackvalue='rubu';
let greeting=`welcome ${username??fallbackvalue}`;
console.log(greeting);