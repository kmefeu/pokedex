function addPoke(id, name, types, solo, secret = false) {

    if (solo == false) { solo = "" }
    else { solo = " solo" }
    let shiny = randomizeInteger(1,100)
    let shinyTittle = ""
    let shinyStyle = ""

    if( shiny == 77){
        shinyTittle = "shiny "
        shinyStyle ="filter:  hue-rotate(180deg);"
    }
    let urlImg = pokeImgSrc(id);
    let li = `
    <li class="pokeTumb ${types[0].type.name}BgTumb${solo}" onclick=windowSet("info.html?id="+${id}) onMouseEnter=secretFound(5)>
    <div class="pokeInfo">
    
        <div>
            <p class="pokeId">#${id}</p>
            <div class="dots"></div>
        </div>

        <p class="pokeName" style="${typeResize(name+shinyTittle)}">${shinyTittle}${(name.replace(/-/gm, " "))}</p>
                  
        <div class="tagsRow">   
        ${pokeTypes(types)}
        </div>

    </div>
    
     <div class="pokeImage">
        
        <img class="sprites" style="${shinyStyle}" src=${urlImg} alt="assets/img/how-is-that-pokemon.png">
        <div class="pokeballBg"></div>
        <img class="pokeShadow" src=${urlImg} alt="assets/img/how-is-that-pokemon.png">

    </div>
    </li>
        `
    document.querySelector("ul").insertAdjacentHTML("beforeend", li);

}

function pokeImgSrc(id) {


    let urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png");// dinamic

    //[722-893,10027-10032,10061,10080-10085,10091-10157] missing default img
    //[10091-10157] no img in api
    //890 892
    //https://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f3.png
    //https://www.serebii.net/swordshield/pokemon/893.png
    //https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/16/latest/20200229020020/Togedemaru.png/475px-Togedemaru.png


    if (id > 10026 && id < 10033) {

        urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png");// dinamic

    }

    if (id == 10061) {

        urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png");// dinamic

    }
    if (id > 10079 && id < 10086) {

        urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png");// dinamic

    }
    if (id > 10090 && id < 10158) {

        urlImg = ("/pokedex/assets/img/how-is-that-pokemon.png");// dinamic

    }

    return urlImg;
}

function pokeTypes(types) {

    let tagsRow = []

    types.forEach(typeElement => {

        typeName = typeElement.type.name

        let typeTag = `
        <div class="typeTag ${typeName}Bg">
        <div class="${typeName}"></div>
        <p>${typeName}</p>
        </div>`

        tagsRow.push(typeTag);

    });

    return tagsRow.join(['']);

}