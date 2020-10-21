var srcPoke = document.querySelector("#srcPoke");
var pokemons;

//srcPoke.onkeydown = (event) => {
   // if (event.key === "Enter") {

        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=500").then(response => { return response.json() })
            .then(data => {
                console.log(data)
                pokemons = data;

                pokemons.results.forEach(function (pokemon) {
                    // console.log(pokemon.name);
                    // console.log(pokemon.url);

                    fetch(pokemon.url).then(response => { return response.json() })
                        .then(data => {
                            console.log(data)

                            pokemon = data;
                            createPoke(pokemon.id,pokemon.name,pokemon.types[0].type.name,pokemon.types[1].type.name,pokemon.id);
                        });

                });

            });
  //  };
//};