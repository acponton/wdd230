

const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;

const currentYear = new Date();
let year = currentYear.getFullYear();
document.querySelector("#year").textContent = year;


let dateModified = new Date(document.lastModified);
document.querySelector("#updated-time").textContent = dateModified;

