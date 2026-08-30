let obj={
    a:45,
    b:65,
    c:'Hii rubi',
    d:{
        x:33,
        y:43,
    },
}
console.log('obj:',obj);
let objCopy= copyMyObjct(obj);
console.log('objcopy:',objCopy);
objCopy.a=100;
objCopy.d.x=111;

console.log('obj',obj);
console.log('objcopy:',objCopy);

function copyMyObjct(obj){
 // let obj2=obj;
  //return obj2;
  let objString=JSON.stringify(obj);
  let obj2=JSON.parse(objString);
  return obj2;
}