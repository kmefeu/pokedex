var srcPoke = document.querySelector("#srcPoke");

srcPoke.addEventListener("input", function () {

    clean(".solo")
    clean(".srcPreview")
    
    var pokemons = document.querySelectorAll(".pokeTumb");

    if (this.value.length > 0) {

        window.removeEventListener("scroll",infiniteScroll)

        document.querySelector(".srcBg").style.borderBottomRightRadius = "0px";
        document.querySelector(".srcBar input").style.borderBottomRightRadius = "0px";

        // SEARCH ON LOADED PAGE

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

        // SEARCH ON DETECTED POKEMONS

        for (let i = 0; i < detectedPokes.length; i++) {

            let dtPoke = detectedPokes[i];
            let dtName = dtPoke.name
            let dtId = i + 1

            let src = new RegExp(this.value, "i");

            if (src.test(dtName) || src.test(dtId)) {
                addSrcPreview(dtId,dtName);
            }
        }

    }
    else {

        window.addEventListener("scroll",infiniteScroll)
        document.querySelector(".srcBg").style.borderBottomRightRadius = "24px";
        document.querySelector(".srcBar input").style.borderBottomRightRadius = "24px";

        for (let i = 0; i < pokemons.length; i++) {
            let pokemon = pokemons[i];
            pokemon.classList.remove("invisible");
        }


    }
});




