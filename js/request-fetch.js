var detectedPokes = [];
var caughtPokes = [];
var loadMoreCalls = 1;
var loadPokeCalls = 1;
var load = 10;
var flag = 1;

// ASK ALL POKEMONS NAME AND URL

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

async function loadMore() {
    if (flag == 1) {

        flag = 0
        loadBase = (loadMoreCalls - 1) * load;
        let target = loadMoreCalls * load;

        for (loadBase; loadBase < target; loadBase++) {
            await pokeInfo(detectedPokes[loadBase].url, true)
        }

        loadMoreCalls = loadMoreCalls + 1
        await loadPoke()
        flag = 1
    }
}

//GET POKEMON DETAILS AND STORE IN CAUGHT POKES

async function pokeInfo(pokeToLoadUrl, store) {
    return await fetch(pokeToLoadUrl)
        .then(response => {
            return response.json()
        }).then(data => {
            if (store == true) { return caughtPokes = [...caughtPokes, data]; }
            else { return data; }
        })
}


// ASK TO addPoke() TO RENDER ON SCREAM CAUGHTPOKES 

async function loadPoke() {

    let loadBase = ((loadPokeCalls - 1) * load)
    let target = loadPokeCalls * load;

    for (loadBase; loadBase < target; loadBase++) {
        await addPoke(caughtPokes[loadBase].id, caughtPokes[loadBase].name, caughtPokes[loadBase].types, false);
    };

    document.querySelector(".pokeball").classList.remove("roll")
    document.querySelector("#srcPoke").value = "";
    loadPokeCalls = loadPokeCalls + 1
}


// INITIAL LOAD AND RENDER FUNCTION CHAIN

detectPokes().then(async () => await loadMore())

   // detectPokes().then(async () => await loadMore()).then(() => loadPoke())
