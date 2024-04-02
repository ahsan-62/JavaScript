
function make_avrg(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

var numbers=[90,80,70];
var total=make_avrg(numbers);
console.log(total);