// Code your solution in this file!
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = x => x.slice(0,2)

const returnLastTwoDrivers = x => x.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function fareMultiplier(fare){
            return fare*multiplier
    }
}

const fareDoubler = fare => createFareMultiplier(2)(fare);

const fareTripler = fare => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (arrayofDrivers,functionHere) => {
    return functionHere(arrayofDrivers)
}