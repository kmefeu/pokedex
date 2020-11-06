// EVITAR ENVIO PADRAO DO FORM

 document.querySelector('form').onkeydown = (event) => {
    if (event.key === "Enter") { event.preventDefault(); }

};


