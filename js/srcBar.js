var input = document.querySelector("#srcPoke");
var output = document.querySelector(".srcBg");

// TROCAR DE COR PARA VERMLHO QUANDO EM FOCO

input.addEventListener("focus", () => {
    output.style.backgroundColor = "var(--red)";
});

input.addEventListener("focusout", () => {
    output.style.backgroundColor = "var(--midGray)";
});


// ANIMAÇÃO DE CARREGAMENTO

input.onkeydown = (event) => {
    if (event.key === "Enter") {
        document.querySelector(".pokeball").classList.add("pokeball-roll")
    }

    ;
}


document.querySelector("#pk1").addEventListener("mouseover", function () {

    let audio = document.querySelector('audio')
    audio.currentTime = 0;
    audio.play();
    setTimeout(function () {
        audio.pause();
    }, 1500);


})


