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
function printName(argStudent){
 // let firstName=argStudent.firstName;
  // let lastName=argStudent.lastName;
  let{firstName,lastName}=argStudent;
   console.log('Name:',firstName,lastName);
}
printName(student)
