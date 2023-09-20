const findTheOldest = function(array) {
    return array.reduce((oldest , current) => {
       const oldestAge = calcAge(oldest.yearOfBirth, oldest.yearOfDeath);
       const currentAge = calcAge(current.yearOfBirth, current.yearOfDeath);
    
       return oldestAge < currentAge ? current : oldest;
    });
};

const calcAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;

}

// Do not edit below this line
module.exports = findTheOldest;
