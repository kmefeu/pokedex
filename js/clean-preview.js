// Clean all existing preview
function cleanPreview(){

    let preview = document.querySelectorAll(".srcPreview")

    for (let i = 0; i < preview.length; i++) {

        preview[i].remove();

    } 
}

