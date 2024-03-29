

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Countryside&units=imperial&appid=79f55bf36280102b3f5d20e8ab057d2d';
  
    // select HTML elements in the document
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const figCaption = document.querySelector('figcaption');
    const windSpeed = document.querySelector('#wind-speed');
    const region = document.querySelector('#region');
    
    async function apiFetch() {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
          } else {
              throw Error(await response.text());
          }
        } catch (error) {
            console.log(error);
        }
      }
  
      function  displayResults(weatherData) {
        currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
        windSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>`;
        region.innerHTML = `<strong>${weatherData.name}</strong>`;
      
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
      
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        figCaption.textContent = desc;
        
      }
      
    apiFetch();
  
    //***********************************
    //       Windchill Calculation 
    //***********************************
  
    function windChill(tempF, speed) {
  
        //temperature factor equation
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        //return variable f
        return f;
    }
  
    // get inputs from fields
    let t = parseFloat(document.getElementById("current-temp").innerHTML);
    let s = parseFloat(document.getElementById("wind-speed").innerHTML);
  
    //call windChill() function to the variable chill and apply the users inputs
    let chill = windChill(t, s);
  
    //output the result to a user
  
    if (t <= 50 && s > 3.0) {
        document.getElementById("wind-chill").innerHTML = chill.toFixed(1) + ' &deg;F';
    } else {
        document.getElementById("wind-chill").innerHTML ='<strong>N/A</strong>';
    }
  });