var input = document.querySelector("#srcPoke");
var random = 1;
var flag2 = 0;

input.onkeydown = async (event) => {
    if (event.key === "Enter") {

        console.log(input.value)

        if (flag2 == 1) {
            if (input.value.toLowerCase() == detectedPokes[random - 1].name) {
                secretFound(1)
            }
        }

        if (input.value == "?") {
            random = randomizeInteger(1, 894).toString()
            flag2 = 1
            customSecretSrc(random)
            document.querySelector("#srcPoke").value = "Who is that Pokemon?";
            secretFound(2)
        }
        else if (input.value == "?1") {
            random = randomizeInteger(1, 152).toString()
            flag2 = 1
            customSecretSrc(random)
            document.querySelector("#srcPoke").value = "Who is that Pokemon?";
            secretFound(2)
        }
        else { customSrc(input.value) }



    }
}

async function previewSelected(pokeName) {
    customSrc(pokeName)
};


async function customSrc(lookingFor) {
    document.querySelector(".pokeball").classList.add("roll")
    lookingFor = lookingFor.toLowerCase()
    lookingFor = lookingFor.replace(/ /gm, "-")
    let src = await pokeInfo("https://pokeapi.co/api/v2/pokemon/" + lookingFor, false)
    await addPoke(src.id, src.name, src.types, true)
    clean(".srcPreview");
    document.querySelector(".pokeball").classList.remove("roll")
}
