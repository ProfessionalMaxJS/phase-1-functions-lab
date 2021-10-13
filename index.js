// Code your solution in this file!

function distanceFromHqInBlocks(destinationStreet){
    destinationStreet = Math.abs(destinationStreet-42);
    return destinationStreet;
}
// distanceFromHqInBlocks() returns a distance in blocks + calculates distances below 42nd street

function distanceFromHqInFeet(destinationStreet){
    destinationStreet = Math.abs(destinationStreet-42);
    return destinationStreet*264;
}
// distanceFromHqInFeet() returns a distance in feet + calculates distances below 42nd street

let distance;

function distanceTravelledInFeet(pickupStreet, destinationStreet){
    distance = Math.abs(destinationStreet-pickupStreet);
    return distance*264;
}
// distanceTravelledInFeet() returns the distance travelled in feet + returns distance when destination is below distance


function calculatesFarePrice(pickupStreet, destinationStreet){
    distance = Math.abs(destinationStreet-pickupStreet)*264;
    let fare;
    
if (distance <= 400){
    fare = 0;
    return fare;
} else if (distance > 400 && distance <= 2000){
    fare = (distance-400)*.02
    return fare;
} else if (distance > 2000 && distance < 2500){
    fare = 25;
    return fare;
} else if (distance > 2500){
    return "cannot travel that far"
}
// calculatesFarePrice(start, destination) gives customers a free sample + charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!) + charges 25 dollars for a distance over 2000 feet + does not allow rides over 2500 feet


// Originally I wrote out calculatesFarePrice() as a Switch statement. For some reason all of the test cases came back as "undefined."
// Including original code for future exploration/debugging. For now, the "if" statement works...

    // switch(distance){
    //     case (distance <= 400):
    //         fare = 0;
    //         return fare;
    //         break;
    //     case (distance > 400 && distance <= 2000):
    //         fare = (distance-400)*.02
    //         return fare;
    //         break;
    //     case (distance > 2000 && distance < 2500):
    //         fare = 25;
    //         return fare;
    //         break;
    //     case (distance > 2500):
    //         return "cannot travel that far";
    //         break;
    // }
}
