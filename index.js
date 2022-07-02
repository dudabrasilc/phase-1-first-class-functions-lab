// Code your solution in this file!

const returnFirstTwoDrivers = function (myArray) {
   return myArray.slice(0,2);
}

const returnLastTwoDrivers = function (myArray) {
    return myArray.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function () {
    const fareQuintupler = function (n) {
        return n*n;
    }
    return fareQuintupler;
}

const fareDoubler = function (n) {
    return 2*n;
}

const fareTripler = function (n) {
    return 3*n;
}


const selectDifferentDrivers = function (myArray,cb) {
    return cb(myArray);
}