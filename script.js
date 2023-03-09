"use strict";
let user = prompt("what is your name?");
alert(`Hi ${user} I'm glad you're interested in getting to know me ,Now you will see yes or no questions `);
let firstquestion = prompt("Is my experience more than a year?");
if (firstquestion.toLowerCase() === "no" || firstquestion.toLowerCase() === "n") {

    alert("yes you are write");
} else {
    alert("no no no no");
}
let secandquestion = prompt("Did you study online?");
if (secandquestion.toLowerCase() == "yes" || secandquestion.toLowerCase() == "y") {
    alert("yes you are write");
} else {
    alert("no no no no");
}
let thirdquestion = prompt("Do you like coding?");
if (thirdquestion.toLowerCase() == "no" || thirdquestion.toLowerCase() == "n") {
    alert("yes you are write");
} else {
    alert("no no no no");
}
let fourquestion = prompt("Do I like to learn new things");
if (fourquestion.toLowerCase() == "yes" || fourquestion.toLowerCase() == "y") {
    alert("yes you are write");
} else {
    alert("no no no no");
}
let fivequestion = prompt(
    "Did the beginning of the coding journey start with a call from Luminous College?"
);
if (fivequestion.toLowerCase() == "yes" || fivequestion.toLowerCase() == "y") {
    alert("yes you are write");
} else {
    alert("no no no no");
}
