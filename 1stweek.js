// What is the correct HTML markup to referenceLinks to an external site. an external JavaScript file named "app.js" located in the scripts folder?
// Where should this reference be located in the HTML document?
<script src="scripts/app.js"></script>

// Replace the following concatenated string using a template literalLinks to an external site..
"Current Date: " + dayName + ", " + monthName + " " + d.getDate() +", " + year;

`Current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;


// Declare and assign a variable named "quantity" the value of an HTML input element with an id of "q" using querySelector
let quantity = document.querySelector('#q').value;

// Output to the first paragraph in an HTML document the string "Welcome to <em>our</em> neighborhood!".
document.querySelector('p').innerHTML = 'Welcome to <em>our</em> neighborhood!';

// Output the returned value of a function named getTemperature to an HTML input element with an id of "temp".
document.querySelector('#temp').value = getTemperature();

// Select all the div elements in a document and assign the result to a const variable named "divs" using querySelectorAll
const divs = document.querySelectorAll('div');

// FilterLinks to an external site. an array named "citynames" to return only city names in the array that start with "C" 
// and store the resulting array into a variable named "filterC".
// If you want to test your array filter statement, use the following test array:
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];

let filterC = citynames.filter(city => city.charAt(0) === 'C');
