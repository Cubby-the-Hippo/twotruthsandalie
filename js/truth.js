let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");
    let yesSelected = document.getElementById("yes").checked;
    let noSelected = document.getElementById("no").checked;
    let maybeSelected = document.getElementById("maybe").checked;

    if (noSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong! What a dummy!";
    } else if (maybeSelected) {
        triviaAnswer.innerHTML = fname + ", why can't you choose?";
    } else if (yesSelected) {
        triviaAnswer.innerHTML = fname + ", you are 10000% correct!";
    } else {
        triviaAnswer.innerHTML = "Please select an option!";
    }
}

function trivia2() {
    let triviaAnswer2 = document.getElementById("trivia2-answer");
    let earsSelected = document.getElementById("ears").checked;
    let backflipSelected = document.getElementById("backflip").checked;
    let cricketSelected = document.getElementById("cricket").checked;

    if (earsSelected) {
        triviaAnswer2.innerHTML = fname + ", you are wrong! I can wiggle my ears!";
    } else if (backflipSelected) {
        triviaAnswer2.innerHTML = fname + ", you are right! I can only do a frontflip.";
    } else if (cricketSelected) {
        triviaAnswer2.innerHTML = fname + ", you are wrong! I've eaten a cricket before, and it was salted!";
    } else {
        triviaAnswer2.innerHTML = "Please select an option!";
    }
}


function trivia3() {
    let triviaAnswer3 = document.getElementById("trivia3-answer");
    let yearInput = document.getElementById("year-input").value;
    let currentYear = new Date().getFullYear(); 

    if (yearInput == currentYear) { 
        triviaAnswer3.innerHTML = fname + ", correct! The current year is " + currentYear + "!";
    } else {
        triviaAnswer3.innerHTML = fname + ", that's not correct. Have you been living under a rock? The current year is " + currentYear + ".";
    }
}
