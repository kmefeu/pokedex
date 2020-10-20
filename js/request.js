var srcPoke = document.querySelector("#srcPoke");
var pokemons;

srcPoke.onkeydown = (event) => {
    if (event.key === "Enter") {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");

        xhr.addEventListener("load", function () {
            // let erroAjax = document.querySelector("#erro-ajax");

            if (xhr.status == 200) {
                // erroAjax.classList.add("invisivel");
                let answer = xhr.responseText;
                pokemons = JSON.parse(answer);

                console.log(pokemons);
                console.log(typeof pokemons);

                pokemons.results.forEach(function (pokemon) {
                    console.log(pokemon.name);
                    console.log(pokemon.url);

                    let xhr2 = new XMLHttpRequest();

                    xhr2.open("GET", "${pokemon.url}");

                    

                xhr2.addEventListener("load", function () {

                        
                        
                       if (xhr2.status == 200) {
                            
                            let answer2 = xhr.responseText;
                            pokemon.data = JSON.parse(answer2);

                            console.log(pokemon.data);

                        }
                       else {
                            // erroAjax.classList.remove("invisible");
                       }

                    });


                });
            } else {
                // erroAjax.classList.remove("invisible");
            }
        });

        xhr.send();

    }
};

