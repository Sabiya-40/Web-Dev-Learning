console.log('call by value');
let c=10;
let d=c;
console.log(`c:${c}`);
console.log(`d:${d}`);
c=16;
console.log(`c:${c}`);
console.log(`d:${d}`);


console.log('call by reference');
let z={myValue:10}
let x={myValue:10};
let y=x;
console.log(`x:${x.myValue}, y${y.myValue}`);
//x.myValue=19;
console.log(`x:${x.myValue}, y${y.myValue}`);
console.log(x==y);
console.log(z==y);
