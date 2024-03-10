// Cogemos el listado del class pokedex
const pokedex = document.getElementById("pokedex");

// linkar POkeAPI
const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=100`;

// Creamos una funcion para cargar los datos que queremos de la PokeAPI

async function cargarDatos(endPoint) {
  const response = await fetch(endPoint, { method: "GET" });
  const data = await response.json();
  if (data.results) {
    const array = data.results;
    pintarPokemon(array, sectionPokemon);
  } else {
    pintarUnPokemon(data, sectionPokemon);
  }
}

cargarDatos(apiUrl);
//cargarDatos(apiUrl + "/1");

//cargarDatos(apiUrl + "?offset=20&limit=20");

//-------------------------------------------------------
const sectionPokemon = document.querySelector("#pokedex");
/* <li class="card">
          <img class="card-image" src="${pokeman.image}" />
          <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
          <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>*/

function pintarPokemon(lista, lugar) {
  for (let pokemon of lista) {
    pintarUnPokemon(pokemon, lugar);
  }
}
async function pintarUnPokemon(character, lugar) {
  const pokemonUrl = character.url;
  const pokemon1 = await fetch(pokemonUrl, { method: "GET" });
  const infoPokemon = await pokemon1.json();

  const li = document.createElement("li"); //<li></li>
  const img = document.createElement("img"); //<img></img>
  img.src = infoPokemon.sprites["front_default"];
  img.alt = infoPokemon.name;
  const h2 = document.createElement("h2"); //<h2></h2>
  h2.textContent = infoPokemon.name;
  const p = document.createElement("p"); //<p></p>
  p.textContent = `Número: ${infoPokemon.id}`;

  li.append(img, h2, p);
  lugar.appendChild(li);
}
