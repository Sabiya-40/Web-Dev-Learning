function learningVar(){
    console.log('learning var');
    console.log('x:',x);
    var x=10;
    console.log('x:',x);
//let wale ko bina declaration ka use nhi kr skte h jbki var wala ko kar skte h
     console.log('y:',y);
    let y=10;
    console.log('y:',y);
}
//learningVar();


 function testGlobal(){
 global=22;
 console.log('global:',global);
 global=24;
 console.log('global:',global);
}
testGlobal();
console.log('global:',global);



function testVar(){
    pop=88;
    console.log('pop:',pop);
     pop=80;
    console.log('pop:',pop);
}
testVar();
console.log('pop:',pop);