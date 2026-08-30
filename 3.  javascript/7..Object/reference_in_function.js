//using reference in function
/*function swap(a,b){
    console.log(`in function: before swap a=${a}, b=${b}`);
    var temp=7;
    a=b;
    b=temp;
    console.log(`in function: after swap a=${a}, b=${b}`);
}
let x=10;
let y=20;
console.log(`before swap x=${x}, y=${y}`);
swap(x,y);
console.log(`after swap x=${x}, y=${y}`);*/

//using object
function swapObj(m,n){
    console.log(`in function: before swap m=${m.myValue}, n=${n.myValue}`);
    var temp=m.myValue;
    m.myValue=n.myValue
    n.myValue=temp;
    console.log(`in function: after swap m=${m.myValue}, n=${n.myValue}`);
}
let obj1={myValue:10}
let obj2={myValue:20}; 
console.log(`before swap ob1=${obj1.myValue}, obj2=${obj2.myValue}`);
swapObj(obj1,obj2);
console.log(`after swap ob1=${obj1.myValue}, obj2=${obj2.myValue}`);
 