// CLEAN ALL SEARCHED POKEMONS
function cleanSrc() {
  let solo = document.querySelectorAll(".solo");

  for (let i = 0; i < solo.length; i++) {
    solo[i].remove();
  }
}
