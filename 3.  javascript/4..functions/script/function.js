 console.log('hii');
 function greeting(){
    console.log("Good morning  user");
 }
 greeting();
 greeting();
 //return value 1 to 4
 function getRandomOption(){
     let randomOption= Math.floor(Math.random()*4+1);
     console.log(randomOption);
     return randomOption;
    }
     let myNumber=getRandomOption();
     console.log(`i got a random number: ${myNumber}`);


     //parameter
     function getSum(num1,num2){
      let sum=num1+num2;
      return sum;
     }
     console.log(getSum(2,5));
     console.log(getSum(223544,333235));
 
