const removeFromArray = function(oldArray,num) {
    const newArray = [];
    for(let i= 0; i<oldArray.length;i++){
        if(oldArray[i] != num){
            newArray.push(oldArray[i]);
        }
    }
    return newArray;
};

console.log(removeFromArray([1,2,3,4,5,6,5],5));

// Do not edit below this line
module.exports = removeFromArray;
