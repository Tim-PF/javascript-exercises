
const removeFromArray = function(newArray , ...extras) {
   const Array = [];   
   for (let value in newArray) {
      if(!extras.includes(newArray[value])) {
         Array.push(newArray[value]);
      }
      else {
         continue;
      }
   };
   return Array;


};

// Do not edit below this line
module.exports = removeFromArray;
