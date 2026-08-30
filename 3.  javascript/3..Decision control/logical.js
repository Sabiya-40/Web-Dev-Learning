//logical operator AND

console.log(true&& true);
console.log(true&& false);
console.log(false&& false);

//oR operator
console.log(true || true);
console.log(true ||false);
console.log(false|| false);

//questions
 let num=9;
 if(num>0 && num%2==0){
    console.log('positive and even number'  );
 }
 else if( num>0){
    console.log('positive and odd number');
 }
 else if(num<0){
    console.log('negative number');
 }
 else{
   console.log(' number is zero');
 }
