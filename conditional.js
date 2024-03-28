var price=450000;
var balance=50000;

if(balance>price){
    console.log('Buy Now');
}
else{
    console.log('Not enough money');
}


var isActive=true;
var stockIn=20;

if(isActive==true && stockIn>0){
    console.log('Order Now');
}
else{
    console.log('Not enough stock');
}

var stock=10;
var sell=5;
var customer=true;

if(sell>stock || customer==false){
    console.log('Order Now');
}
else{
    console.log('Not enough stock');
}