function addPoke(id, name, types) {

    let ul = document.querySelector("ul");

    let li = document.createElement("li")
    li.classList.add("pokeTumb", types[0].type.name + "BgTumb"); // dinamic

    let pokeInfo = document.createElement("div")
    pokeInfo.classList.add("pokeInfo");

    let div = document.createElement("div");

    let pokeId = document.createElement("p");
    pokeId.classList.add("pokeId");
    pokeId.textContent = ("#" + id); // dinamic

    let dots = document.createElement("div")
    dots.classList.add("dots");

    let pokeName = document.createElement("p")
    pokeName.classList.add("pokeName");
    pokeName.textContent = name; // dinamic

    let tagsRow = document.createElement("div")
    tagsRow.classList.add("tagsRow");

    types.forEach(element => {

        ty = element.type.name

        let typeTag = document.createElement("div")
        typeTag.classList.add("typeTag", ty + "Bg"); // dinamic

        let type = document.createElement("div")
        type.classList.add(ty); // dinamic

        let pType = document.createElement("p");
        pType.textContent = ty; // dinamic

        typeTag.appendChild(type);
        typeTag.appendChild(pType);

        tagsRow.appendChild(typeTag);


    });

    let pokeImage = document.createElement("div")
    pokeImage.classList.add("pokeImage");

    let urlImg = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png");// dinamic

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

    let img = document.createElement("img");
    img.classList.add("sprites");
    img.setAttribute('src', urlImg);


    let pokeShadow = document.createElement("img");
    pokeShadow.classList.add("pokeShadow");
    pokeShadow.setAttribute('src', urlImg);


    let pokeballBg = document.createElement("div");
    pokeballBg.classList.add("pokeballBg");



    div.appendChild(pokeId);
    div.appendChild(dots);

    pokeInfo.appendChild(div);
    pokeInfo.appendChild(pokeName);

    pokeInfo.appendChild(tagsRow);

    pokeImage.appendChild(img);
    pokeImage.appendChild(pokeballBg);
    pokeImage.appendChild(pokeShadow);

    li.appendChild(pokeInfo);
    li.appendChild(pokeImage);

    ul.appendChild(li);

}
