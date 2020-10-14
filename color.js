var input = document.getElementById("srcPoke");


input.addEventListener("focus", ()=> {
    
    let output = document.querySelector(".srcBg");
    
    output.style.backgroundColor = "var(--red)";
});