console.log('practise Exercise');

//MUltIPLICATION QUESTION
//console.log('multiplication table');
//let num=13;
//when we have to take input
//let num=prompt('enter the number for which table has to be generated');
//let i=1;
//while(i<=10){
   // console.log(`${num}*${i}=${num*i}`);
   // i++;
//}

//USING FUNCTION
/*function printMultiplicatonTable(num){
    console.log('Multiplication Table');
    let i=1;
    while(i<=10){
        console.log(console.log(`${num}*${i}=${num*i}`));
        i++;
    }
}
let tableNum=prompt("Enter the number of which table has to be generated");
printMultiplicatonTable(tableNum);*/



//HOW TO FIND FACTORIAL
function getFactorial(num){
let i=1;
let result=1;
while(i<=num){
   result=result*i;
   i++;
}
return result;
}
console.log('Factorial');
let num=prompt("Enter the number for which Factorial needs to be calculated");
console.log(getFactorial(num));





