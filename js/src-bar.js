var input = document.querySelector("#srcPoke");
var output = document.querySelector(".srcBg");
var output2 = document.querySelector(".srcBar input");

// TROCAR DE COR PARA VERMLHO QUANDO EM FOCO

input.addEventListener("focus", () => {
    output.style.backgroundColor = "var(--red)";
});

input.addEventListener("focusout", () => {
    output.style.backgroundColor = "var(--midGray)";
    output2.style.borderBottomRightRadius = "24px";
    setTimeout(() => { cleanPreview() }, 200);


});

// TIRA RADIOS DO CANTO ESQUERTO

input.addEventListener("keydown", () => {

    cleanSrc()

    if (input.value.length > 0) {
        output2.style.borderBottomRightRadius = "0px";
    }
    else {

        output2.style.borderBottomRightRadius = "24px";
    }
})


// ANIMAÇÃO DE CARREGAMENTO E BUSCA PERSONALIZADA

input.onkeydown = (event) => {
    if (event.key === "Enter") {

        document.querySelector(".pokeball").classList.add("roll")

        async function timeHolder() {

            let src = await pokeInfoSolo("https://pokeapi.co/api/v2/pokemon/" + input.value)
            await addPokeSolo(src.id, src.name, src.types)

        }

        timeHolder()
        cleanPreview();
        setTimeout(() => { document.querySelector(".pokeball").classList.remove("roll") }, 650);


    }
}

// segundo request para a api

async function pokeInfoSolo(pokeToLoad) {

    return await fetch(pokeToLoad)
        .then(response => {
            return response.json()
        }).then(data => {
            // console.log(data)
            return data;
        })

}

function addPokeSolo(id, name, types) {

    //let tagsRow = pokeTypes(types);
    let urlImg = pokeImgSrc(id);

    let li = `
    <li class="pokeTumb ${types[0].type.name}BgTumb solo">
    <div class="pokeInfo">
    
        <div>
            <p class="pokeId">#${id}</p>
            <div class="dots"></div>
        </div>

        <p class="pokeName">${name}</p>
                  
        <div class="tagsRow">   
        ${pokeTypes(types)}
        </div>

    </div>
    
     <div class="pokeImage">
        
        <img class="sprites" src=${urlImg}>
        <div class="pokeballBg"></div>
        <img class="pokeShadow" src=${urlImg}>

    </div>
    </li>
        `


    document.querySelector("ul").insertAdjacentHTML("beforeend", li);

}


var solo = document.querySelectorAll(".solo");

var preview = document.querySelector(".preview");



preview.addEventListener("click", function (event) {

    console.log(event.target.parentNode.textContent.trim())

    let url = ("https://pokeapi.co/api/v2/pokemon/"+ event.target.parentNode.textContent.trim())

    document.querySelector(".pokeball").classList.add("roll")

    async function timeHolder() {

        let src = await pokeInfoSolo(url)
        await addPokeSolo(src.id, src.name, src.types)

    }

    timeHolder()
    cleanPreview();
    setTimeout(() => { document.querySelector(".pokeball").classList.remove("roll") }, 650);


});
