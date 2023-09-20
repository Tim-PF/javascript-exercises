const getTheTitles = function(array) {
    let newArray = [];
 array.forEach(title => {
    
    current = title.title;
    newArray.push(current)
})
return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
