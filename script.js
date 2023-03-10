"use strict";
let count = 0;
let user = prompt("what is your name?");
alert(`Hi ${user} I'm glad you're interested in getting to know me ,Now you will see yes or no Questions `);
let firstQuestion = prompt("Is my experience more than a year?");
if (firstQuestion.toLowerCase() === "no" || firstQuestion.toLowerCase() === "n") {

    alert("yes you are write");
    count += 1;
} else {
    alert("no no no no");
}
let secondQuestion = prompt("Did you study online?");
if (secondQuestion.toLowerCase() == "yes" || secondQuestion.toLowerCase() == "y") {
    alert("yes you are write"); count += 1;
} else {
    alert("no no no no");
}
let thirdQuestion = prompt("Do you like coding?");
if (thirdQuestion.toLowerCase() == "no" || thirdQuestion.toLowerCase() == "n") {
    alert("yes you are write"); count += 1;
} else {
    alert("no no no no");
}
let fourQuestion = prompt("Do I like to learn new things");
if (fourQuestion.toLowerCase() == "yes" || fourQuestion.toLowerCase() == "y") {
    alert("yes you are write"); count += 1;
} else {
    alert("no no no no");
}
let fiveQuestion = prompt(
    "Did the beginning of the coding journey start with a call from Luminous College?"
);
if (fiveQuestion.toLowerCase() == "yes" || fiveQuestion.toLowerCase() == "y") {
    alert("yes you are write"); count += 1;
} else {
    alert("no no no no");
}

for (let index = 0; index < 4; index++) {
    let sixQuestion = Number(prompt(
        "How many children do I have?"
    ))
    if (sixQuestion > 1) {
        alert('No, it is less than that');

    }
    else if (sixQuestion === 1) {
        alert('yes'); count += 1;
        break;

    } else if (index === 3) {
        alert('I have one baby');
        break;

    }

    else {
        alert('no no no i have a baby')
    }


}

let favoritePlaces = ['Bali',
    'Bora',
    ' Tahiti',
    ' London',
    'Rome',
    ' Barcelona',
    'Banff'];

for (let i = 0; i < 6; i++) {

    let sevenQuestion = prompt(
        `what is my favorite places?
 you should choose one of these  ${favoritePlaces}`

    );
    if (sevenQuestion === favoritePlaces[0].toLowerCase()) {
        alert('yes you are right'); count += 1;
        break;
    }
    else if (sevenQuestion !== favoritePlaces[0].toLowerCase()) {
        alert('no it is not');


    }
    else if (i === 5) {
        alert('it is Bali');
        break;

    }



}
alert(`your scour is ${count}`)
