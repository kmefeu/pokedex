async function pokeInfoSolo(pokeToLoad) {
    return await fetch(pokeToLoad)
        .then(response => {
            return response.json()
        }).then(data => {
            return data;
        })
}

function addPokeSolo(id, name, types) {

    let urlImg = pokeImgSrc(id);

    let li = `
    <li class="pokeTumb ${types[0].type.name}BgTumb solo" onclick=windowSet("info.html?id="+${id})>
    <div class="pokeInfo">
    
        <div>
            <p class="pokeId">#${id}</p>
            <div class="dots"></div>
        </div>

        <p class="pokeName" style="${typeResize(name)}">${(name.replace(/-/gm, " "))}</p>
                  
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