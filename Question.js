var username = prompt("what is my first name?");
let i = 1;
if (username === 'Liam'){
    alert("congrads you got it right")
    i++;
}
else {
    alert("your guess of " + username +" was wrong, please try again")
}

var touchdown = prompt("How many points is a touchdown?");

if (touchdown === "7"){
    alert("Correct, you get 7 points for a touchdown")
    i++;
}
else {
    alert("your guess of " + touchdown +" was wrong, please try again")
}
var goal = prompt("How many points is a goal in soccer?");

if (goal === "1"){
    alert("Correct, you get 1 point for a goal in soccer")
    i++;
}
else {
    alert("your guess of " + goal +" was wrong, please try again")
}
alert("You got " + i + " questions right")
alert("Your answers were " + username +", " + touchdown +", "+ goal)