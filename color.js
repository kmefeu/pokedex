var input = document.getElementById("srcPoke");
var output = document.querySelector(".srcBg");


input.addEventListener("focus", () => {
    output.style.backgroundColor = "var(--red)";
});

input.onkeydown =  (event) =>  
{if (event.key === "Enter") document.querySelector(".pokeball").classList.add("pokeball-roll")
;}



