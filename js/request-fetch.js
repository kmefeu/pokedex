var srcPoke = document.querySelector("#srcPoke");
var pokemons;



fetch(url).then(response => { return response.json() })
    .then(data => {
        console.log(data)
        return data;
    });