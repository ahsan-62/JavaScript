

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