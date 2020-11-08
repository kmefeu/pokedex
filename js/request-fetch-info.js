const params = (new URL(document.location)).searchParams;
const urlId = params.get("id");
console.log(urlId)



// ASK ALL POKEMONS NAME AND URL FOR DETAILS

function getFlaivor(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {

            console.log(data.flavor_text_entries[4].flavor_text)

            let flaivor = []

            data.flavor_text_entries[4].flavor_text != undefined ? flaivor[0] = data.flavor_text_entries[4].flavor_text : flaivor[0] = "Not Defined"

            data.genera[7] != undefined ? flaivor[1] = data.genera[7].genus : flaivor[1] = "Not Defined"

            return flaivor;
        })
};


async function loadDetail(id) {
    await pokeInfo("https://pokeapi.co/api/v2/pokemon/" + id, false)
        .then(async (data) => {

            flaivor = await getFlaivor(data.species.url)
            console.log(data)
            console.log(flaivor)
            let name = data.name
            let types = data.types
            let height = ((data.height) / 10)
            let weight = ((data.weight) / 10)

            addDetail(id, name, types, flaivor[0], flaivor[1], height, weight)

        })
    
        document.querySelector(".pokeball").classList.remove("roll");
    document.querySelector("#srcPoke").value = "";
}

loadDetail(urlId)

async function pokeInfo(pokeToLoadUrl, store) {
    return await fetch(pokeToLoadUrl)
        .then(response => {
            return response.json()
        }).then(data => {
            if (store == true) { return caughtPokes = [...caughtPokes, data]; }
            else { return data; }
        })
}
