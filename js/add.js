function createPoke(id,na,t1,t2,im) {
    let ul = document.querySelector("ul");

    let li = document.createElement("li")
    li.classList.add("pokeTumb");

    let pokeInfo = document.createElement("div")
    pokeInfo.classList.add("pokeInfo");

    let div = document.createElement("div");

    let pokeId = document.createElement("p");
    pokeId.classList.add("pokeId");
    pokeId.textContent = ("#"+id);

    let dots = document.createElement("div")
    dots.classList.add("dots");

    let pokeName = document.createElement("p")
    pokeName.classList.add("pokeName");
    pokeName.textContent = na;

    let tagsRow = document.createElement("div")
    tagsRow.classList.add("tagsRow");

    let typeTag = document.createElement("div")
    typeTag.classList.add("typeTag",t1+"Bg");

    let type = document.createElement("div")
    type.classList.add(t1);

    let pType = document.createElement("p");
    pType.textContent = t1;

    let typeTag2 = document.createElement("div");
    typeTag2.classList.add("typeTag",t2+"Bg");

    let type2 = document.createElement("div");
    type2.classList.add(t2);

    let pType2 = document.createElement("p");
    pType2.textContent = t2;

    let pokeImage = document.createElement("div")
    pokeImage.classList.add("pokeImage");
    
    let img = document.createElement("img");
    //img.setAttribute('src',"/../pokedex/assets/img/pk1.png");
    img.setAttribute('src',im);

    let pokeballBg = document.createElement("div");
    pokeballBg.classList.add("pokeballBg");

    let pokeShadow = document.createElement("div");
    pokeShadow.classList.add("pokeShadow");

    div.appendChild(pokeId);
    div.appendChild(dots);
    
    pokeInfo.appendChild(div);
    pokeInfo.appendChild(pokeName);
    
    typeTag.appendChild(type);
    typeTag.appendChild(pType);
    
    tagsRow.appendChild(typeTag);
    
    typeTag2.appendChild(type2);
    typeTag2.appendChild(pType2);
    
    tagsRow.appendChild(typeTag2);
    
    pokeInfo.appendChild(tagsRow);
    
    pokeImage.appendChild(img);
    pokeImage.appendChild(pokeballBg);
    pokeImage.appendChild(pokeShadow);
    
    li.appendChild(pokeInfo);
    li.appendChild(pokeImage);
    
    ul.appendChild(li);

}

createPoke("001","Bulbasaur","grass","poison","/../pokedex/assets/img/pk1.png");