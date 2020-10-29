function addPoke(id, name, types) {

    //let tagsRow = pokeTypes(types);
    let urlImg = pokeImgSrc(id);

    let li = `
    <li class="pokeTumb ${types[0].type.name}BgTumb">
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

function pokeImgSrc(id) {


    let urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png");// dinamic

    //[722-893,10027-10032,10061,10080-10085,10091-10157] missing default img
    //[10091-10157] no img in api

    if (id > 721 && id < 894) {

        urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png");// dinamic

    }

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

        urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png");// dinamic

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