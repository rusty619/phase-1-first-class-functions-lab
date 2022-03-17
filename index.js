// Code your solution in this file!
const returnFirstTwoDrivers = (drivers)=> {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

let selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return function(fare){
        return fare*x;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arr,x) => {
    return x(arr)
}