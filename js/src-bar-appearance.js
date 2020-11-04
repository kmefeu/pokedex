var input = document.querySelector("#srcPoke");
var output = document.querySelector(".srcBg");
var output2 = document.querySelector(".srcBar input");

// RED BG ON FOCUS

input.addEventListener("focus", () => {
    output.style.backgroundColor = "var(--red)";
});

input.addEventListener("focusout", () => {
    output.style.backgroundColor = "var(--midGray)";
    output2.style.borderBottomRightRadius = "24px";
    setTimeout(() => { cleanPreview() }, 200);


});

// CORNER RADIUS FIX

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


