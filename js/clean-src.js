// Clean all existing solo searched pokemons
function cleanSrc(){

    let solo = document.querySelectorAll(".solo")

    for (let i = 0; i < solo.length; i++) {

        solo[i].remove();

    }

}
