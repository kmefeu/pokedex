document.querySelector("#srcPoke").addEventListener("focus", () => {
    document.querySelector(".srcBg").style.backgroundColor = "var(--red)";   
});

document.querySelector("#srcPoke").addEventListener("focusout", () => {
    document.querySelector(".srcBg").style.backgroundColor = "var(--midGray)";
    document.querySelector(".srcBar input").style.borderBottomRightRadius = "var(--borderRadius)";
    setTimeout(() => { clean(".srcPreview") }, 200);

});




