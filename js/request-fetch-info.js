const params = (new URL(document.location)).searchParams;
const urlId = params.get("id");

document.querySelector(".pokeball").classList.remove("roll");
document.querySelector("#srcPoke").value = "";

// ASK ALL POKEMONS NAME AND URL FOR DETAILS

function getFlaivor(id) {
    return fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data.flavor_text_entries[4].flavor_text)
            console.log(data.genera[7].genus)

            let flaivor = []
            flaivor[0] = data.flavor_text_entries[4].flavor_text;
            flaivor[1] = data.genera[7].genus;

            return flaivor;
        })
};


async function loadDetail(id) {
    await pokeInfoSolo("https://pokeapi.co/api/v2/pokemon/" + id)
        .then( async (data) => {

            flaivor = await getFlaivor(id)
            console.log(data)
            console.log(flaivor)
            let name = data.name
            let types = data.types
            let height = ((data.height) / 10)
            let weight = ((data.weight) / 10)
            
            addDetail(id,name,types,flaivor[0],flaivor[1],height,weight)

        })

}

loadDetail(urlId)

