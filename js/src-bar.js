var input = document.querySelector("#srcPoke");
var output = document.querySelector(".srcBg");
var output2 = document.querySelector(".srcBar input");

// TROCAR DE COR PARA VERMLHO QUANDO EM FOCO

input.addEventListener("focus", () => {
    output.style.backgroundColor = "var(--red)";
    input.addEventListener("keydown", () => {

        if (input.value.length >= 0) {

            output2.style.borderBottomRightRadius = "0px";
        }
    })


});

input.addEventListener("focusout", () => {
    output.style.backgroundColor = "var(--midGray)";
    output2.style.borderBottomRightRadius = "24px";
});


// ANIMAÇÃO DE CARREGAMENTO

input.onkeydown = (event) => {
    if (event.key === "Enter") {
        document.querySelector(".pokeball").classList.add("roll")
    }

    ;
}








