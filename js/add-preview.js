function addSrcPreview(i, name) {


    let div = document.createElement("div");

    let previewHtml = ` 
   <div class="srcPreview">
   <p class="namePreview">${name}</p>
   </div>`

    div.innerHTML = previewHtml

    document.querySelector(".preview").appendChild(div);

}