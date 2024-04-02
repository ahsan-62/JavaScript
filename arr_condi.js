//Array in Javascripts

var age=[30,90,50,44,32,34,67];
var name=['Ahsan','Jun','Shahzad','Hossain','Rizwan','Shahzad','Hossain'];

console.log(age);
console.log(name);

//get elements by Index

var element=age[2];
console.log(element);


//set element by Index
age[1]=60;
console.log(age[1]);

//Find Index

console.log(age.indexOf(34));

//Add and Rmeove  last elements by using push and pop

age.push(56);
console.log(age);
age.pop();

//add and remove first elements by using unshift and shift

age.unshift(56);
console.log(age);
age.shift();

