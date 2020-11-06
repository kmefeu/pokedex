var detectedPokes = [];
var caughtPokes = [];
var loadMoreCalls = 1;
var loadPokeCalls = 1;
var load = 10;

var flag = 1;

// ASK ALL POKEMONS NAME AND URL

async function detectPokes() {
    console.log("+++++++++++++ DETECT POKES  +++++++++++++")
    return await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            detectedPokes = data.results;
            return detectedPokes;
        })
};


// function infinite() {
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//         loadMore()
//     }

// }

// window.addEventListener('scroll', infinite)

async function loadMore() {


    if (flag == 1) {
        
        flag = 0
        
        console.log("+++++++++++++ LOAD TIME +++++++++++++")

        loadBase = (loadMoreCalls - 1) * load;
        let target = loadMoreCalls * load;

        console.log("MORE Base = " + loadBase)
        console.log("MORE Targ =" + target)

        for (loadBase; loadBase < target; loadBase++) {


            await pokeInfo(detectedPokes[loadBase].url)
        }
        loadMoreCalls = loadMoreCalls + 1

        await loadPoke()

        flag = 1
    }
}

//GET POKEMON DETAILS AND STORE IN CAUGHT POKES

async function pokeInfo(pokeToLoadUrl) {

    return await fetch(pokeToLoadUrl)
        .then(response => {
            return response.json()
        }).then(data => {
            console.log("INFO Id = " + data.id)
            return caughtPokes = [...caughtPokes, data];
        })
}


// ASK TO addPoke() TO RENDER ON SCREAM CAUGHTPOKES 

async function loadPoke() {

    let loadBase = ((loadPokeCalls - 1) * load)
    let target = loadPokeCalls * load;

    console.log("LOAD Base = " + loadBase)
    console.log("LOAD Targ = " + target)

    console.log("+++++++++++++ RENDER TIME +++++++++++++")

    for (loadBase; loadBase < target; loadBase++) {

        console.log("LOAD  id = " + caughtPokes[loadBase].id)

        await addPoke(caughtPokes[loadBase].id, caughtPokes[loadBase].name, caughtPokes[loadBase].types);
    };
    document.querySelector(".pokeball").classList.remove("roll")
    document.querySelector("#srcPoke").value = "";
    loadPokeCalls = loadPokeCalls + 1
}


// INITIAL LOAD AND RENDER FUNCTION CHAIN

detectPokes().then(async () => await loadMore())

   // detectPokes().then(async () => await loadMore()).then(() => loadPoke())


