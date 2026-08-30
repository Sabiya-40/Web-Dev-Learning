console.log('using json local storage');
/*localStorage.setItem('name','kgcoding');
let user={
    firstName:'rubi',
    lastName:'khatun',
    age:22,
    email:'sabiyatrnm@gmail.com',
    hobbies:['reading','music'],
};
localStorage.setItem('userInfo',JSON.stringify(user));*/

let userInfo=localStorage.getItem
('userInfo');
console.log(userInfo);
console.log(typeof userInfo);