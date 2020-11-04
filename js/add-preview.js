function addSrcPreview(name) {
    let previewHtml = ` 
   <div class="srcPreview">
   <p>${name}</p>
   </div>
   `
   document.querySelector(".preview").insertAdjacentHTML("beforeend", previewHtml);
}