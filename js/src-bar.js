var input = document.querySelector("#srcPoke");
var output = document.querySelector(".srcBg");
var output2 = document.querySelector(".srcBar input");

// ANIMAÇÃO DE CARREGAMENTO E BUSCA PERSONALIZADA

input.onkeydown = async (event) => {
    if (event.key === "Enter") {

        document.querySelector(".pokeball").classList.add("roll")
        
        let src = await pokeInfoSolo("https://pokeapi.co/api/v2/pokemon/" + input.value)
        await addPokeSolo(src.id, src.name, src.types)
        
        cleanPreview();
        
        document.querySelector(".pokeball").classList.remove("roll");
    }
}

var solo = document.querySelectorAll(".solo");
var preview = document.querySelector(".preview");


preview.addEventListener("click", async function (event) {

    console.log(event.target.parentNode.textContent.trim())
    
    let url = ("https://pokeapi.co/api/v2/pokemon/" + event.target.parentNode.textContent.trim())
    document.querySelector(".pokeball").classList.add("roll")
   
    let src = await pokeInfoSolo(url)
    await addPokeSolo(src.id, src.name, src.types)
    
    cleanPreview();
    
    document.querySelector(".pokeball").classList.remove("roll")
});
