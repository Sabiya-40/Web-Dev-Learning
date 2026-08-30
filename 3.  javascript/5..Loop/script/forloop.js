/*function printMultiplicatonTable(num){
    console.log('Multiplication Table');
    
    for(let i=1;i<=10;i++){
        console.log(console.log(`${num}*${i}=${num*i}`));
    }
}
let tableNum=prompt("Enter the number of which table has to be generated");
printMultiplicatonTable(tableNum);

//reverse a number
function reverseTheDigit(num){
let result=0;
for(;num>0;)
{
    let rem = num%10;
    result= result*10+rem;
    num=Math.floor(num/10);
}
return result;

}
console.log(reverseTheDigit(145));*/



//check the number is prime or not?
function isPrime(num){
    for (let i=2;i<num;i++){
        if(num%2===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(37));
console.log(isPrime(77));
console.log(isPrime(27));
console.log(isPrime(57));   


//INFINITE LOOP
let num=1;
while(num<0){
    console.log(num);
}
console.log("end of the loop")//ye line kabhi nhi chlegi infinity loop me fass jayega
