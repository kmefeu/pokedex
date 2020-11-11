function randomizeInteger(min, max) {
    if (max == null) {
        max = (min == null ? Number.MAX_SAFE_INTEGER : min);
        min = 0;
    }

    min = Math.ceil(min);  // inclusive min
    max = Math.floor(max); // exclusive max

    if (min > max - 1) {
        throw new Error("Incorrect arguments.");
    }

    return min + Math.floor((max - min) * Math.random());
}

function addSecretPoke(id, name) {

    let urlImg = pokeImgSrc(id);
    let li = `
    <li class="pokeTumb secretTumb" onclick=pokeSound(${id})>
    <div class="pokeInfo">
    
        <div>
            <p class="pokeId" value="${id}">###</p>
            <div class="dots"></div>
        </div>

        <p class="pokeName" style="${typeResize(name)}" value="${name}">${(name.replace(/[a-zA-Z]/gm, "*"))}</p>
                  

    </div>
    
     <div class="pokeImage">
        
     <img class="howIs" src="assets/img/how-is-that-pokemon.png">   
     <img class="sprites" style="filter:  brightness(0%);" src=${urlImg} alt="assets/img/how-is-that-pokemon.png">
        <div class="pokeballBg"></div>
        <img class="pokeShadow" src=${urlImg} alt="assets/img/how-is-that-pokemon.png">

    </div>
    </li>
        `
    document.querySelector("ul").insertAdjacentHTML("afterbegin", li);

   
}

async function customSecretSrc(lookingFor) {
    document.querySelector(".pokeball").classList.add("roll")
    lookingFor = lookingFor.toLowerCase()
    lookingFor = lookingFor.replace(/ /gm, "-")
    let src = await pokeInfo("https://pokeapi.co/api/v2/pokemon/" + lookingFor, false)
    await addSecretPoke(src.id, src.name, src.types, true)
    clean(".srcPreview");
    document.querySelector(".pokeball").classList.remove("roll")
}

let audio = document.querySelector('#aPlayer')
audio.setAttribute('src', "assets/audio/secret_found.mp3");


function secretFound(file) {
    
    if(file == 1){audio.setAttribute('src', "assets/audio/secret_found.mp3");}
    if(file == 2){audio.setAttribute('src', "assets/audio/who_is_that_pokemon.mp3");}
    if(file == 3){audio.setAttribute('src', "assets/audio/acabou.mp3");}
    if(file == 4){audio.setAttribute('src', "assets/audio/pokemon_red_blue_trap_remix.mp3");}
    
    audio.currentTime = 0;
    audio.play();
}


function pokeSound(id) {
    console.log(id)
    
    audio.setAttribute('src', "/pokedex/assets/audio/pokesounds/"+(id-1)+".mp3")
    audio.play();
}