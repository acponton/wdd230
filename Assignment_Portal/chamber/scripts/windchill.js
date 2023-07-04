
const windSpeed = 2.5;


//*********** Windchill ************//




// get inputs from fields
let t = 40;
let s = 10;

//call windChill() function to the variable chill and apply the users inputs
let chill = windChill(t, s);

windchill = 35.74 + 0.6215 * t - (35.75 * s) ** 0.16 + (0.4275 * t * s)**0.16
document.querySelector("#wind-chill").textContent = windchill; 


if (t <= 50 && s > 3.0) {
    document.getElementById("wind-chill").innerHTML = chill.toFixed(1) + ' &deg;F';
} else {
    document.getElementById("wind-chill").innerHTML ='N/A';
}


