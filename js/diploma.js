document.querySelector(".pokeball").classList.remove("roll")
document.querySelector("#srcPoke").value = "";

document.querySelector("#srcPoke").onkeydown = async (event) => {
    if (event.key === "Enter") {

        document.querySelector("#playerName").innerHTML = "<b>Player: </b>" + document.querySelector("#srcPoke").value
    }
}


function diploma() {

    console.log(detectedPokes.length)
    console.log(caughtPokes.length)

     if (detectedPokes.length == caughtPokes.length) {

    secretFound(3)
    
    setTimeout(function(){  if (confirm("You have completed your pokedex do you want your diploma ?")) {
        window.location = "diploma.html"
    }
 }, 3000);
       


  }

}
