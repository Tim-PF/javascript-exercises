const reverseString = function(text) {
    textLength = text.length;
    let textReversed = "";
    for (let i = textLength - 1; i>=0 ; i--) {
        textReversed += text[i] 
    }
    return textReversed;


};

// Do not edit below this line
module.exports = reverseString;
