
var detectedPokes = [];
var caughtPokes = [];

var indicator = 0;
var iniLoad = 10;
var morLoad = 10;

// detecta o nome de todos os pokemons e suas urls

async function detectPokes() {
    return await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
        .then(response => {
            return response.json()
        })
        .then(data => {
           //console.log(data)
            detectedPokes = data.results;
           // console.log(detectedPokes)
            return detectedPokes; // precisa do return ?
        })
};

// adiciona 10 pokes iniciais

async function initialLoad() {
    for (indicator = 0; indicator < iniLoad; indicator++) {
        await pokeInfo(detectedPokes[indicator].url)
    }
}

// loadmore pokemons

async function loadMore() {
   
    let target = indicator + morLoad;
    
   for (indicator; indicator < target ; indicator++) {
        await pokeInfo(detectedPokes[indicator].url)
    }
}


//pega as informaçoes nessesárias para poder montar as tumbs solicitadas

async function pokeInfo(pokeToLoad) {

    return await fetch(pokeToLoad)
        .then(response => {
            return response.json()
        }).then(data => {
           // console.log(data)
            return caughtPokes = [...caughtPokes, data];
        })

}

function loadPoke() {

    let loadBase

    if (indicator == iniLoad) { loadBase = (caughtPokes.length - iniLoad) }
    else { loadBase = caughtPokes.length - morLoad }

    for (loadBase; loadBase < caughtPokes.length; loadBase++) {

        addPoke(caughtPokes[loadBase].id, caughtPokes[loadBase].name, caughtPokes[loadBase].types);
    };
    document.querySelector(".pokeball").classList.remove("roll")
    document.querySelector("#srcPoke").value = "";
}


detectPokes().then(async () => await initialLoad()).then(() => loadPoke())


