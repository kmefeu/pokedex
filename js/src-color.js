var input = document.getElementById("srcPoke");
var output = document.querySelector(".srcBg");


input.addEventListener("focus", () => {
    output.style.backgroundColor = "var(--red)";
});

input.addEventListener("focusout", () => {
    output.style.backgroundColor = "var(--midGray)";
});


input.onkeydown =  (event) =>  
{if (event.key === "Enter") document.querySelector(".pokeball").classList.add("pokeball-roll")
;}



