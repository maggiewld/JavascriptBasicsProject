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
var firstWord = prompt("Input an adjective");
var secondWord = prompt ("Input a noun");
var thirdWord = prompt ("Input another adjective")
alert("All done!")
var message = "<h2>There once was a " + firstWord
message += " " + secondWord;
message += " that was the " + thirdWord;
message += " " + secondWord + " in the world!</h2>"
document.write(message);
*/

//Time Calculator Code ------------------------------------
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
