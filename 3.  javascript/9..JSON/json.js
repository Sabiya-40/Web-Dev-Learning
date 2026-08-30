let user={
    firstName:'rubi',
    lastName:'khatun',
    age:22,
    email:'sabiyatrnm@gmail.com',
    hobbies:['reading','music'],
};
console.log(user);


let userStr=JSON.stringify(user);
console.log(userStr);
console.log(typeof(userStr));

//convert into javascript object    method 1
let newUser1=JSON.parse(userStr);
console.log(newUser1);


//method 2    yha edit bhi kar skte h
let myStr='{"firstName":"ranii","lastName":"khatun","age":22,"email":"sabiyatrnm@gmail.com","hobbies":["reading","music","playing "]}';
let newUser2=JSON.parse(myStr)
 console.log(newUser2);
console.log(newUser2[" rollNo"]);

