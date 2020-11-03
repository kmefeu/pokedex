var input = document.querySelector("#srcPoke");
var output = document.querySelector(".srcBg");
var output2 = document.querySelector(".srcBar input");

// TROCAR DE COR PARA VERMLHO QUANDO EM FOCO

input.addEventListener("focus", () => {
    output.style.backgroundColor = "var(--red)";
});

input.addEventListener("focusout", () => {
    output.style.backgroundColor = "var(--midGray)";
    output2.style.borderBottomRightRadius = "24px";
    setTimeout(() => { cleanPreview() }, 200);


});

// TIRA RADIOS DO CANTO ESQUERTO

input.addEventListener("input", () => {

    cleanSrc()

    if (input.value.length > 0) {
        output.style.borderBottomRightRadius = "0px";
        output2.style.borderBottomRightRadius = "0px";
    }
    else {

        output.style.borderBottomRightRadius = "24px";
        output2.style.borderBottomRightRadius = "24px";
    }
})


