var input = document.querySelector("#srcPoke");

input.onkeydown = async (event) => {
    if (event.key === "Enter") {
        customSrc(input.value) 
    }
}

async function previewSelected(pokeName) {
    customSrc(pokeName) 
};


async function customSrc (lookingFor) {
    document.querySelector(".pokeball").classList.add("roll")
    let src = await pokeInfo("https://pokeapi.co/api/v2/pokemon/" + lookingFor, false)
    await addPoke(src.id, src.name, src.types, true)
    clean(".srcPreview");
    document.querySelector(".pokeball").classList.remove("roll")
}