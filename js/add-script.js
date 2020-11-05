function addScript() {

    let scriptHtml = `
    <script src="js/form-prevent-default.js"></script>
    <script src="js/src-bar.js"></script>
    <script src="js/src-bar-appearance.js"></script>
    <script src="js/add-tumb.js"></script>
    <script src="js/audio.js"></script>
    <script src="js/add-preview.js"></script>
    <script src="js/clean-preview.js"></script>
    <script src="js/search.js"></script>
    <script src="js/clean-src.js"></script>
    <script src="js/request-add-solo.js"></script>
    <script src="js/add-detail.js"></script>
    <script src="js/request-fetch-info.js"></script>
    <script src="js/fit-text.js"></script> 
`
    document.querySelector("body").insertAdjacentHTML("beforeend", scriptHtml);
}

addScript()