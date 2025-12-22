const reverseString = function(myString) {

    const newString = myString.split("").reverse().join("");
    console.log(newString);

};

reverseString("Hello There!");

// Do not edit below this line
module.exports = reverseString;
