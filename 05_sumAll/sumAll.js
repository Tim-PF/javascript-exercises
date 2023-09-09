const sumAll = function(value1 , value2) {
    let min , max;
    if (value1 < 0 || value2 <0) {
        return 'ERROR';
    
    }
    if (typeof(value1) !== 'number' || typeof(value2) !== 'number' ) {
        return 'ERROR';
    }
    if (value1 < value2) {
        min = value1;
        max = value2;
    }
    else {
         min = value2;
         max = value1;
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {
       sum += i 
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
