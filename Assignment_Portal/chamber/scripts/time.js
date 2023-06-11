

function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
}
const dateDisplay = document.getElementById("date-container");

dateDisplay.innerHTML = getCurrentDateAndTime();

const currentYear = new Date();
let year = currentYear.getFullYear();
document.querySelector("#year").textContent = year;


let dateModified = new Date(document.lastModified);
document.querySelector("#updated-time").textContent = dateModified;

