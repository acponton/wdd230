// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
// const results = fetch(url);
// console.log(results);'


// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// const results = fetch(url);
// doStuff(results);


// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// async function getPokemon(url) {
//   const results = await fetch(url);
//   doStuff(results);
// }

// getPokemon(url);



const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);