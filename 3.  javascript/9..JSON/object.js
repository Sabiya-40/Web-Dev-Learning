console.log('object equality');
let a={firstName:'rani'};
let b=a;
console.log(a==b);
console.log(a===b);
let c={firstName:'rani'};
console.log(a==c);
console.log(a===c);

//shallow copy using json isme bs first item ko dekh k compare kr deta h
let student={
    firstName:'aakku',
    lastName:'nji',
    age:22,
    address:{
    homeNo:12,
    city:'bazar',
    state:'jharkhand',
    },
   subjects:['Math','Science','sst'],
   feesPaid:true,
};
//student.friends=[students]; iss case me work nhi krega loop type me fass jayega   circular reference 
console.log(JSON.stringify(student));


let student1={
    firstName:'aakkuuu',
    lastName:'njiii',
    age:21,
    address:{
    homeNo:122,
    city:'bazaree',
    state:'jharkhandii',
    },
   subjects:['Maths','Sciencess','ssts'],
   feesPaid:true,
};
// console.log(JSON.stringify(student1));
//for shallow copy
console.log(Object.keys(student));
