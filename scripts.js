//Basics---------------------------------------------------
/*
alert(message);
var visitorName = prompt("What is your name?"); Captures user input/returned value
alert(visitorName);
message = "Welcome to Javascript Basics";
document.write("<h1>Welcome to Javascript Basics</h1>");
alert("Thanks for visiting.");
console.log("Program complete"); //Shows a message in JS  console
*/

//Concatenation--------------------------------------------
/*
var visitor = prompt("What is your name?");
var message = "Hello " + visitor;
    // + combines strings   (Concatenation). Spaces need to be added within the string quotes.
message = message + ". Welcome to Treehouse.";
message += " We\'re so glad that you came by.";
    //'+=' same as writing out '= message'. Will update from previous.
document.write(message);
*/

//Example Method-------------------------------------------
/*
var stringToShout = prompt("What should I shout?");
var shout = stringToShout.toUpperCase();
shout += "!!!";
alert(shout);
*/

//Story Maker Code-----------------------------------------
/*
"<h2> There once was a [Adjective] [Noun] that was the [Adjective] in the world!</h2>"

alert("Time to write a story!")
var questions = 3;
var questionsLeft = " [" + questions + " questions left]"
var firstWord = prompt("Input an adjective" + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var secondWord = prompt ("Input a noun" + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var thirdWord = prompt ("Input another adjective" +questionsLeft);
alert("All done!")
var message = "<h2>There once was a " + firstWord
message += " " + secondWord;
message += " that was the " + thirdWord;
message += " " + secondWord + " in the world!</h2>"
document.write(message);
*/

//Time Calculator Code ------------------------------------
/*
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day.");
var yearsAlive = 28;
var weeksAlive = yearsAlive * weeksPerYear;
var daysAlive = weeksAlive * daysPerWeek;
var secondsAlive = daysAlive * secondsPerDay;
document.write(" I\'ve been alive for more than " + secondsAlive + " seconds.");
*/

//Converting strings to numbers----------------------------
/*
var htmlBadges = prompt("How many HTML badges do you have?");
var cssBadges = prompt("How many CSS badges do you have?");
var totalBadges = parseInt(htmlBadges) + parseInt (cssBadges); //parseInt to convert string to integer
alert("Wow! You have " + totalBadges + " badges!");
*/

//Creating a random number (die roll) ---------------------
/*
var dieRoll = Math.floor(Math.random() * 6)+1
alert("You rolled a " + dieRoll);
*/

//Random Number Generator Challenge -----------------------
/*
var inputMin = prompt("Input minimum number");
var minNumber = parseInt(inputMin);
var inputMax = prompt("Input maximum number");
var maxNumber = parseInt(inputMax);
var randomNumber = Math.floor(Math.random()*(maxNumber-minNumber+1))+ minNumber;
var message = "<p>" + randomNumber + " is a number betweeen " + minNumber + " and " + maxNumber + ".</p>";
document.write(message);
*/

// Conditional Statements Quiz ----------------------------
/*
var answer = prompt("What programming language is the name of a gem?");
if (answer.toUpperCase() === "RUBY") { //.toUpperCase negates problem of different case returning incorrect answer
  document.write("<p>That's right!</p>");
} else {
  document.write("<p>Sorry, that's wrong...</p>");
}
*/

// Random Number Guessing Game-----------------------------
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt("I'm thinking of a number between 1 and 6. What is it?");
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
    if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
    if (parseInt(guess) === randomNumber) {
      correctGuess = true;
    }
}

if (correctGuess) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
}
