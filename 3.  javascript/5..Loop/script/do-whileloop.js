/*function inputPositiveNumber(){
    let num;
    do{
        num=prompt('enter the positive number');
        num=parseInt();
        console.log(num);
    }while(num<0 );
    return num;
    }
    let num= inputPositiveNumber();
    console.log(`the positive number is entered is:${num}`);*/
//BREAK STATEMENT
for(let i=0;i<10;i++){
 if(i===5){
    break;
 }
 console.log(i);
}

//CONTINUE STATEMENT
for(let i=0;i<10;i++){
 if(i===5){
    continue;
 }
 console.log(i);
}
