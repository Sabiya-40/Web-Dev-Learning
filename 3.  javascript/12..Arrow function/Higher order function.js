//defination of higher order function:-function that return a function
const createDouble=()=>{
  return num=> num*2;
 }
 const twice=createDouble();//iss method se ek bar function call hoti h
 
 console.log(twice(2));
 console.log(twice(5));

 //other method to print// iss method se 2 bar function ko call krna pdta h
 console.log(createDouble()(2));
 console.log(createDouble()(5)); 