

//Function

function add(a,b){

    var c=a+b;
    console.log(c);
}

add(5,7);




function money(money){
    var perPc=500;
    var quantities=money/perPc;
    return quantities;
}

var total=money(10000);

console.log('Total PC:',total);


function averageMarks(num1,num2,num3){

    var average=(num1+num2+num3)/3;
    return average;
}

var total=averageMarks(70,80,90);

console.log( 'Total Average:',total)


/*
1.No return value ,No parameter
2.Has return value ,No parameter
3.No return value ,Has parameter
4.Has return value ,Has parameter

*/



//Object in JS

var ahsan={
    name:'ahsan',
    age:0,
    height:6.2
}
console.log(ahsan);
ahsan.name='jun'; //inject a new property/key-value to ahsan object
console.log(ahsan);


//Multiple Object set and get


var jun={
    name:"JUN",
    age:25,
    id:180119,
    reg:101792
}

console.log(jun);

console.log(jun.name);
var name=jun['name'];
name='ahsan';
console.log(name);

name