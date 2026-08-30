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
    showRating:function(){
    let totalRating =this.fiveStar+ this.fourStar+this.threeStar+this.twoStar+this.oneStar;

    let avgRating=(5*rating.fiveStar+ 4*rating.fourStar+3*rating.threeStar+2*rating.twoStar+1*rating.oneStar)/totalRating;


console.log('Total Rating:',totalRating);
console.log('Average Rating:',avgRating);
}
    }
};


function showRating(rating){
    let totalRating =rating.fiveStar+ rating.fourStar+rating.threeStar+rating.twoStar+rating.oneStar;

    let avgRating=(5 * rating.fiveStar+ 4 * rating.fourStar+3 * rating.threeStar+2 * rating.twoStar+1 * rating.oneStar)/totalRating;


console.log('Total Rating:',totalRating);
console.log('Average Rating:',avgRating);

}
showRating(product.rating);
product.rating.showRating();





