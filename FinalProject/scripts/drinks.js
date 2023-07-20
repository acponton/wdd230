const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");

const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"
var fruitList = [];

// async function apiFetch() {
//     try {
//       const response3 = await fetch(url);
//       if (response3.ok) {
//         const data3 = await response3.json();
//         console.log(data3); // this is for testing the call
//         displayResults(data3);
//         fruitList = data3;
//       } else {
//           throw Error(await response3.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }
  
apiFetch();
var orders = localStorage.getItem("Drinks");
function displayResults (fruitData){
    var choice1 = fruitData.forEach(fruit => {
        const option = document.createElement("option");

        option.setAttribute("value", fruit.name)
        option.innerHTML=fruit.name;

        choice1.appendChild(option)});
    // ------------------------------------------------------  
    var choice2 = fruitData.forEach(fruit => {
        const option2 = document.createElement("option");

        option2.setAttribute("value", fruit.name)
        option2.innerHTML=fruit.name;

        choice2.appendChild(option2);
    });
    var choice3 = fruitData.forEach(fruit => {
        const option3 = document.createElement("option");

        option3.setAttribute("value", fruit.name)
        option3.innerHTML=fruit.name;

        choice3.appendChild(option3);
    });
    }
// -------------------------------
