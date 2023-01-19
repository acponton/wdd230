
const currentYear = new Date();
let year = currentYear.getFullYear();
document.querySelector("#year").textContent = year;


let dateModified = new Date(document.lastModified);
document.querySelector("#updated-time").textContent = dateModified;