var srcPoke = document.querySelector("#srcPoke");

srcPoke.addEventListener("input", function () {
    var pokemons = document.querySelectorAll(".pokeTumb");

    if (this.value.length > 0) {
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
    } else {

        for (let i = 0; i < pokemons.length; i++) {
            let pokemon = pokemons[i];
            pokemon.classList.remove("invisible");
        }
    }
});
