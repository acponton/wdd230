
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.innerHTML = numVisits;
} else {
	visitsDisplay.innerHTML = `Welcome to the Countryside Chamber of Commerce!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

document.addEventListener("DOMContentLoaded", function() {
    var timeLoaded = document.getElementById("timeLoaded");
    timeLoaded.value = today.toISOString();
  });

// Join button

function redirectToPage() {
    window.location.href = "https://acponton.github.io/wdd230/Assignment_Portal/chamber/join.html";
}