const sumAll = function(num1,num2) {

    let sum = 0;
    let tempNum = 0;

    if(num1 <= 0 || num2 <= 0){
        return "ERROR";
    }else if(num1 > num2 ){
        num2 = tempNum;
        num2 = num1;
        num1 = tempNum;
        
    }



    for(let i=num2;i>(num1-1);i--){
        sum += i;

    }
    return sum;

};

console.log(sumAll(5,1));

// Do not edit below this line
module.exports = sumAll;
