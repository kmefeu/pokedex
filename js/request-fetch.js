//[722-893,10027-10032,10061,10080-10085,10091-10157]
//[10091-10157]

var urlGet = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050";
var caughtPokes = [];

function getPoke(url) {
    return fetch(url).then(response => { return response.json() })
        .then(data => {
            console.log(data)
            var pokemons = data.results;

            return Promise.all(pokemons.map(pokemon =>
                fetch(pokemon.url)
                    .then(response => { return response.json() })
            ))
        })
        .then(promiseAllResponse => promiseAllResponse)
};


function loadPoke() {


    getPoke(urlGet).then(data => {

        caughtPokes = [...caughtPokes, ...data];
        console.log(data);

        caughtPokes.forEach(poke => {

            addPoke(poke.id, poke.name, poke.types);

        });

        document.querySelector(".pokeball").classList.remove("roll")
        document.querySelector("#srcPoke").value = "";
    })
        .catch(error => {
            console.log(error);
        })

}


loadPoke();

