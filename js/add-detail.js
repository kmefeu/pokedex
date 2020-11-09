function addDetail(id, name, types, flaivorText, species, height, weight) {
    let urlImg = pokeImgSrc(id);
    let detailHtml = ` 

<div class="pokeTumb ${types[0].type.name}BgTumb">
            
            <div class="pokeInfo">

                <p class="pokeId">#${id}</p>

                <div class="row">
                <p class="pokeName" style="${typeResize2(name)}">${(name.replace(/-/gm, " "))}</p>
                <div class="dots"></div>
                </div>
                
                <div class="tagsRow">${pokeTypes(types)}</div>

            </div>
            
            <div class="pokeImage">

                <img class="sprites" src="${urlImg}">
                <img class="pokeShadow" src="${urlImg}">

            </div>

        </div>
        
        <div class="specContainer">
            <p class="textFlaivor">
            ${(flaivorText).replace(/[\r\n]|+/gm, " ")}
            </p>
            <div class="line"></div>
            <ul class="spec">
                <li><b>species:</b> ${species}</li>
                <li><b>height:</b> ${height}m</li>
                <li><b>weight:</b> ${weight}kg</li>
            </ul>   
        </div>
`
    document.querySelector("main").insertAdjacentHTML("beforeend", detailHtml);
}

