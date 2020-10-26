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





