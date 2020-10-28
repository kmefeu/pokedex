function addSrcPreview(i, name) {


    let div = document.createElement("div");

    let previewHtml = ` 
   <div class="srcPreview ${name}" id="${i + 1}">
   <p>#${i + 1}<p/>
   <p>${name}</p>
   </div>`

    div.innerHTML = previewHtml

    document.querySelector(".preview").appendChild(div);

}

