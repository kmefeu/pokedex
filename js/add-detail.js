function addDetail(id, name, types, flaivorText, species, height, weight) {
    let urlImg = pokeImgSrc(id);
    let detailHtml = ` 

<div class="pokeTumb ${types[0].type.name}BgTumb">
            
            <div class="pokeInfo">

                <p class="pokeId">#${id}</p>
                <p class="pokeName">${name}</p>

                <div class="row">
                <div class="tagsRow">${pokeTypes(types)}</div>
                <div class="dots"></div>
                </div>

            </div>
            
            <div class="pokeImage">

                <img class="sprites" src="${urlImg}">
                <img class="pokeShadowSpec" src="${urlImg}">

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
                <li><b>abilities:</b>1. Overgrow</li>

                <li><b>weaknesses:</b></li>
            </ul>
            <div class="tagsRow">
                <div class="typeTag fireBg">
                    <div class="fire"></div>
                    <p>fire</p>
                </div>
                <div class="typeTag flyingBg">
                    <div class="flying"></div>
                    <p>flying</p>
                </div>
                <div class="typeTag iceBg">
                    <div class="ice"></div>
                    <p>ice</p>
                </div>
                <div class="typeTag psychicBg">
                    <div class="psychic"></div>
                    <p>psychic</p>
                </div>
            </div>
        </div>
`

    document.querySelector("main").insertAdjacentHTML("beforeend", detailHtml);
}

