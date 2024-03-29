/*Cheryl Ferguson
SDI 1204 Project 3*/


//Global 
var ourFuture = [];
var idealSchools = {
    publicSchools: ["Penn. State", "Old Dominion University", "UMD", "Virginia Tech"]

};


//Method Procedure ~1
var welcomeDays = {
    type: "kids",
    days: 20,
    myCountdown: function (begin) {
        console.log("It is almost time for the colleges to start and the" +" "+ this.type + " " + "need to get ready!" + "! How many days before they leave?");
        if (this.days >= 14) {
            console.log("Looks like we have a few weeks before school " + begin + "!")
        } else {
            if (this.days < 14 && this.days >= 7) {
                console.log("They have less than 2 weeks for school to " + begin + ", guess we need to begin packing.")
            } else {
                console.log("It\'s time to " + begin + " .")
            }
        }
    }

};


// Method Function ~2
var idealSchool = {
    publicSchool: true,
    cost: 6000,
    goodToGo: function (actualCost, theirCost) {
        if (theirCost == this.cost) {
            if (actualCost >= this.cost) {
                console.log("We found the right school.");
                return true; 
            } else {
                console.log("We found a great school, but the money isn't right.");
                return false; 
            }
        } else {
            console.log("This is not the school for us.");
            return false; 
        }
    }
};




// Method Accessor ~3
var kids = {
    myKids: 3, 
    graduated: function (who) {
        var totalGraduated;
        console.log("My boys are growing up and becoming adults. So far we have " + who + " "+ "on our list.");
        hsGraduates = 2;
        while (hsGraduates <= this.myKids) {
            console.log(hsGraduates);
            return hsGraduates++; 
        }
        totalGraduated = this.hsGraduates;
        return totalGraduated; 
    }
};

// Mutator Method ~4

var gasThere = {
    hoursAway: 3,
    gasMoney: 75,
    gasOptions: function (json) {
        var availStations;
        console.log("Information on our gas station choices:");
        for (var i = 0; i < json.gas.length; i++) {
            console.log(" ");
            if (json.gas[i].rewardPoints === false) {
                console.log("We won't receive any reward points at " + json.gas[i].station + " station!");
               for (var d = 1; d <= this.hoursAway; d++) {
                    console.log("We only have"+" "+ this.gasMoney +" " + " allocated to fill up.");
                }
            } else {
                console.log(json.gas[i].station + "is a reasonable station to fill up.");
            }
            var theGas = json.gas[i];
            var perTrip = theGas.pricePerGallon * this.hoursAway;
            console.log("The " + theGas.station + " is " + theGas.pricePerGallon + " per gallon.");
            if (json.gas[i].rewardPoints === false) {
                var perTrip = perTrip + (this.gasMoney * this.hoursAway); //  Mutator
                console.log("These"+" " + this.gasMoney * this.hoursAway +" "+"points will allow us to use them at the store.");
            } else {
                console.log("We can make it on a full tank of gas.");

            }

        }
    }
};


// Return Array

function interest() {
    var myInterest = [];
    	myInterest[0] = "Psychology";
    	myInterest[1] = "Early Childhood Education";
    	myInterest[2] = "Child Psychology";

    return myInterest.join(); 
}

//Object from json file ~5

var closeFriends = {
    bestFriends: function (json) {
        console.log("All of my friends are going to college.");

        for (var key in json.friends) {
            var friend = json.friends[key];
            console.log(friend.name + ": " + friend.type + ", age:" + friend.age);
        }

        var endFall = function () {
                var endSemester = {
                    "breakTime": "Winter Break"
            
                };
                console.log("The semester is over!");
                return endSemester;
            };

        console.log("Yes! It's " + endFall().breakTime + " gives me time to rest!")
    }
};


/*Calling all functions*/

// 1
welcomeDays.myCountdown("begin");

//2
if (idealSchool.goodToGo(400,6000)) {
    console.log("Yes! I am glad we found the one.");
} else {
    console.log("Back to the drawing board.");
};

// 3
var currentStatus = kids.graduated(idealSchools.publicSchools);
console.log("I have " + currentStatus + " college students!");

//4

var ourChoices = gasThere.gasOptions(json2);
console.log("Their interests include:"+ " "+interest()+" "+",and Mass Communication."); 

//5
closeFriends.bestFriends(json);
