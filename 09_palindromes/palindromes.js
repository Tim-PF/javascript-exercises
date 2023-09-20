const palindromes = function (text) {
    const processedString = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const myArray = processedString.split("")
    myArray.reverse();
    palindrome = myArray.join('');
    if (processedString === palindrome) {
        return true;
    }
    else {
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
