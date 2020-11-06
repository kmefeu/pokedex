function addSrcPreview(id,name) {
    let previewHtml = ` 
   <a class="srcPreview" onclick=previewSelected("${name}")>
   <p>#${id} ${name.replace(/-/gm, " ")}</p>
   </a>
   `
   document.querySelector(".preview").insertAdjacentHTML("beforeend", previewHtml);
}
