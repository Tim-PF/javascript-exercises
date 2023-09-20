const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
   let myArray = [];
   newNum = 1;
   oldNum = 0;
   for (let i = 0; i<n; i++) {
    
    myArray.push(newNum)
    newNum += oldNum;
    oldNum = myArray[i]
   }
   return myArray[n-1];

};


// Do not edit below this line
module.exports = fibonacci;
