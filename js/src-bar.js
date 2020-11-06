var input = document.querySelector("#srcPoke");
var output = document.querySelector(".srcBg");
var output2 = document.querySelector(".srcBar input");

// LOADING E CUSTOM SEARCH

input.onkeydown = async (event) => {
    if (event.key === "Enter") {

        document.querySelector(".pokeball").classList.add("roll")
        let src = await pokeInfoSolo("https://pokeapi.co/api/v2/pokemon/" + input.value)
        await addPokeSolo(src.id, src.name, src.types)
        cleanPreview();
        document.querySelector(".pokeball").classList.remove("roll");
    }
}

async function previewSelected(pokeName) {

    document.querySelector(".pokeball").classList.add("roll")
    let src = await pokeInfoSolo("https://pokeapi.co/api/v2/pokemon/" + pokeName)
    await addPokeSolo(src.id, src.name, src.types)
    cleanPreview();
    document.querySelector(".pokeball").classList.remove("roll")
};

