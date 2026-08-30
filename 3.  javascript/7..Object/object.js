console.log('learning object ');
let company='nike';
let itemName='running shoes';
let price=2500;
let numberOfRating=38;
let avgRating=4.5;
console.log(price);


let product={
company:'nike',
'item-name':'running shoes',
 price:2500,
numberOfRating:38,
 avgRating:4.5,
  rating:{
    fiveStar:10,
    fourStar:5,
    threeStar:33,
    twoStar:7,
    oneStar:8,

 }
};
console.log(product.rating.fiveStar);//inside object nested object
console.log('access object using dot notation:',product.price);
let key='item-name';
console.log('access object using bracket notation:',product[ key]);
console.log(product);
console.log(typeof product);

//modified the object
product.discount=50;
console.log('after modified product:',product);
delete product.avgRating;
console.log('after delete product:',product);

