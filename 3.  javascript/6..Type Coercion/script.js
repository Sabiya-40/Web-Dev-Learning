console.log('hii'+4);
console.log('44'+4);
console.log('44'-4);
console.log(true==1);
console.log(true===2); 


//factorial using iterative loop
function getFactorialIterative(num){
 let i=1;
 let result=1;
 while(i<=num){
    result*=i;
    i++;
 }
 return result;
}
console.log(getFactorialIterative(6));


//factorial using  other 
function getFactorial(num){
    console.log(`get factorial called`);
    if(num===1|| num===0) return 1;
    let fact=getFactorial(num-1);
    return mum*fact;
}
console.log(getFactorial(9));