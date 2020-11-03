
var detectedPokes = [];
var caughtPokes = [];

var indicator = 0;
var iniLoad = 10;
var morLoad = 10;

// ASK ALL POKEMONS NAME AND URL FOR DETAILS

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

// ASK INITIAL POKEMONS DETAILS 

async function initialLoad() {
    for (indicator = 0; indicator < iniLoad; indicator++) {
        await pokeInfo(detectedPokes[indicator].url)
    }
}

// ASK MORE POKEMONS DETAILS FOR INFINITE SCROLL

async function loadMore() {
   
    let target = indicator + morLoad;
    
   for (indicator; indicator < target ; indicator++) {
        await pokeInfo(detectedPokes[indicator].url)
    }
}

//GET POKEMON DETAILS AND STORE IN CAUGHT POKES

async function pokeInfo(pokeToLoadUrl) {

    return await fetch(pokeToLoadUrl)
        .then(response => {
            return response.json()
        }).then(data => {
            return caughtPokes = [...caughtPokes, data];
        })

}


// ASK TO addPoke() TO RENDER ON SCREAM CAUGHTPOKES 

function loadPoke() {

    let loadBase

    if (indicator != iniLoad){ loadBase = indicator - morLoad } 
    else { loadBase = indicator - iniLoad }

    for (loadBase; loadBase < indicator; loadBase++) {

        addPoke(caughtPokes[loadBase].id, caughtPokes[loadBase].name, caughtPokes[loadBase].types);
    };
    document.querySelector(".pokeball").classList.remove("roll")
    document.querySelector("#srcPoke").value = "";
}


// INITIAL LOAD AND RENDER FUNCTION CHAIN

detectPokes().then(async () => await initialLoad()).then(() => loadPoke())


