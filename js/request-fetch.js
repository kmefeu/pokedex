var detectedPokes = [];
var caughtPokes = [];

var loadCalls = 1;
var indicator = 0;
var load = 10;

// ASK ALL POKEMONS NAME AND URL FOR DETAILS

async function detectPokes() {
    return await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
        .then(response => {
            return response.json()
        })
        .then(data => {
            detectedPokes = data.results;
            return detectedPokes;
        })
};

// ASK INITIAL POKEMONS DETAILS 

async function initialLoad() {
    for (indicator = 0; indicator < load; indicator++) {
        await pokeInfo(detectedPokes[indicator].url)
    }
    console.log("indicator INICIAL = " + indicator)
}

// ASK MORE POKEMONS DETAILS FOR INFINITE SCROLL

async function loadMore() {

    indicator = (loadCalls-1)*load;
    let target = loadCalls*load;
    console.log("tCalls = " + loadCalls)
    console.log("indicator = " + indicator)
    console.log("target = " + target)
        
        for (indicator; indicator < target; indicator++) {
            await pokeInfo(detectedPokes[indicator].url)
        }

        console.log("indicatorEND = " + indicator)
        
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

async function loadPoke() {

    let loadBase = ((loadCalls-1)*load);

    for (loadBase; loadBase < indicator; loadBase++) {

        await addPoke(caughtPokes[loadBase].id, caughtPokes[loadBase].name, caughtPokes[loadBase].types);
    };
    document.querySelector(".pokeball").classList.remove("roll")
    document.querySelector("#srcPoke").value = "";
}


// INITIAL LOAD AND RENDER FUNCTION CHAIN

detectPokes().then(async () => await initialLoad()).then(() => loadPoke())


