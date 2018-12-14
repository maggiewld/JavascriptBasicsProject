//alert(message);
//var visitorName = prompt("What is your name?"); //Captures user input/returned value
//alert(visitorName);
//message = "Welcome to Javascript Basics";
//document.write("<h1>Welcome to Javascript Basics</h1>");
//alert("Thanks for visiting.");
//console.log("Program complete"); //Shows a message in JS  console

var visitor = prompt("What is your name?");
var message = "Hello " + visitor; // + combines strings (Concatenation). Spaces need to be added within the string quotes.
message = message + ". Welcome to Treehouse.";
message += " We\'re so glad that you came by."; //'+=' same as writing out '= message'. Will update from previous.
document.write(message);
