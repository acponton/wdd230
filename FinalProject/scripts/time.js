

const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;

const currentYear = new Date();
let year = currentYear.getFullYear();
document.querySelector("#year").textContent = year;


let dateModified = new Date(document.lastModified);
document.querySelector("#updated-time").textContent = dateModified;


//banner

let banner = document.getElementById('banner');

if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday") {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

function closeBtn() {
    document.getElementById("banner").style.display = "none";
  }

document.getElementById("closeBtn").addEventListener("click", closeBtn);
