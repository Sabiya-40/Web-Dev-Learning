console.log('Different method of array');
let arr=[1,3,54,33,2,87,56,44];
let obj={};
console.log('is array:',Array.isArray(arr));
console.log('is array:',Array.isArray(obj));
console.log('toString:',arr);
arr.push(15);
console.log('toString:',arr);
arr.sort();
console.log('sort array:',arr.sort());


arr.forEach(function(item,i){
    if(i===2) return;  
    console.log('for Each:',item,  i)
});


//other
function tempPrint(val){
    if(val % 2===0){
        console.log('inside condition:')
        return;
}
console.log(val);
}
for(let i=0;i<10;i++){
    tempPrint(i);
}

//ADVANCE METHOD IN ARRAY map & filter method
let newArr= arr.map(function(item){
    console.log('map:',item);
    return item*item;
});

    let newArr1=arr.filter(function(item){
return item%2===0;
    });
console.log('map:',arr);
console.log('map:',newArr);
console.log('filter:',newArr1); 
