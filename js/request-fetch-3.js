
var detectedPokes = [];
var caughtPokes = [];


// detecta o nome de todos os pokemons e suas urls

async function detectPokes() {
    return await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            detectedPokes = data.results;
            console.log(detectedPokes)
            return detectedPokes; // precisa do return ?
        })
};

// adiciona 10 pokes iniciais

function initialLoad() {

    
    for (let i = 0; i < 10; i++) {
         pokeInfo(detectedPokes[i].url)
    }

}


//pega as informaçoes nessesárias para poder montar as tumbs solicitadas

async function pokeInfo(pokeToLoad) {

    return await fetch(pokeToLoad)
        .then(response => {
            return response.json()
        }).then(data => {
            return caughtPokes = [...caughtPokes, data];
        })

}

function loadPoke() {


    console.log("entrei aqui no load");
    console.log(caughtPokes.length);

    for (let i = 0; i < caughtPokes.length; i++) {

        console.log("entrei aqui no for");

        addPoke(caughtPokes[i].id, caughtPokes[i].name, caughtPokes[i].types);
    };
    document.querySelector(".pokeball").classList.remove("roll")
    document.querySelector("#srcPoke").value = "";

    
}


detectPokes().then(() => initialLoad()).then(() => loadPoke())

