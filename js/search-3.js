var srcPoke = document.querySelector("#srcPoke");

srcPoke.addEventListener("input", function () {

    // Clean all existing preview

    let preview = document.querySelectorAll(".srcPreview")

    for (let i = 0; i < preview.length; i++) {

        console.log("Removeu Previu")
        preview[i].remove();

    }

    var pokemons = document.querySelectorAll(".pokeTumb");

    if (this.value.length > 0) {

        // search on loaded page

        for (let i = 0; i < pokemons.length; i++) {

            let pokemon = pokemons[i];
            let pokeName = pokemon.querySelector(".pokeName");
            let pokeId = pokemon.querySelector(".pokeId");
            let name = pokeName.textContent;
            let id = pokeId.textContent;
            let src = new RegExp(this.value, "i");

            if (!src.test(name) && !src.test(id)) {
                pokemon.classList.add("invisible");
            } else {
                pokemon.classList.remove("invisible");
            }
        }

        // search on detected pokemons

        for (let i = 0; i < detectedPokes.length; i++) {

            let dtPoke = detectedPokes[i];
            let dtName = dtPoke.name
            let dtId = i + 1

            let src = new RegExp(this.value, "i");

            if (src.test(dtName) || src.test(dtId)) {
                addSrcPreview(i, dtName);
            }
            else {
                //console.log("caiu no else")
            }
        }

    }
    else {

        for (let i = 0; i < pokemons.length; i++) {
            let pokemon = pokemons[i];
            pokemon.classList.remove("invisible");
        }


    }
});




