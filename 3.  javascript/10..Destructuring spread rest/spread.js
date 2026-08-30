let obj={
    a:43,
    x:12,
    hello:'pinii'
}
let even=[2,4,6,8,10];
console.log('even:',even);


let newEven=[...even];

newEven.push(12);
console.log('even:',even);
console.log('newEven:',newEven);
console.log(even);
console.log(newEven.length);

let obj1={
    a:43,
    x:12,
    hello:'pinii'
};
let newObj={...obj1}
console.log('obj',obj);
console.log('newObj:',newObj);