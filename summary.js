/*
1. Array
2. Object
3. Function
4. Loop
5. Conditional
6. Operator
7. Shorthand
*/

//Array

/*var des=['Sajek','saint-martin','sreemangal'];
console.log(des);

console.log(des.length);
console.log(des[2]);
console.log(des.indexOf('saint-martin'));

des.push('sherpur');
console.log(des);
des.pop();
console.log(des);
*/

//Conditional-If-Else

var color='red';

if(color=='blue'){
    console.log('color is blue');
}
else if(color=='red'){
    console.log('color is red');
}
else if(color=='green'){
    console.log('color is green');
}
else{
    console.log('color is not blue or red');
}


//Switch-Case

switch(color){
    case('blue'):
    console.log('color is blue');
    break;
    case('red'):
    console.log('color is red');
    break;
    case('green'):
    console.log('color is green');
    break;
    default:
    console.log('color is not blue or red');
}

//Function

function ahsan(a,b){
    var c=a+b;
    return c;
}
console.log(ahsan(5,6));

function average(a,b,c){
    var avrg=(a+b+c)/3;
    return avrg;
}

var total=average(70,80,90);
var total1=average(50,60,70);
console.log('Total Average:',total,'Second Total Average:',total1);

//Object in Javascripts
//...........................................................................................................


var ahsan={
    name:'ahsan',
    age:25,
    id:180119,
    reg:101792
}

console.log(ahsan);
ahsan.age=87;
console.log(ahsan);
ahsan['age']=76;
console.log(ahsan);


console.log(ahsan.age);



var jun={

    name:'JUN',
    institution: 'Eden Mohila College',
    id:180119,
    reg:101792
}
var junProperties=Object.keys(jun);
console.log(junProperties);
var junValues=Object.values(jun);
console.log(junValues);


//Get Key and values by using for loop and for in loop in javascript-Object
for(var i=0;i<junProperties.length;i++)
{

    var propValue=jun[junProperties[i]];
    var properties=junProperties[i];
    console.log(properties,':',propValue);

}

for (const properties in jun) {
    const propValue=jun[properties];
    console.log(properties,':',propValue);
}

//...................................................................................................