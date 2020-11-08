function clean(classToClean){
    let preview = document.querySelectorAll(classToClean)
    for (let i = 0; i < preview.length; i++) {
        preview[i].remove();
    } 
}

