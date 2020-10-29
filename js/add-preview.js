function addSrcPreview(i, name) {


    let div = document.createElement("div");

    let previewHtml = ` 
   <div class="srcPreview" value="${i + 1}">
   <p class="hach">#</p>
   <p class="idPreview">${i + 1}<p/>
   <p class="namePreview">${name}</p>
   </div>`

    div.innerHTML = previewHtml

    document.querySelector(".preview").appendChild(div);

}

