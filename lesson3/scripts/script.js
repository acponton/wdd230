var date = new Date();
var year = date.getFullYear();
document.querySelector("#currentYear").innerHTML = year;
let lastModified = new Date(document.lastModified);        
document.getElementById("documentLastUpdated").innerHTML = lastModified