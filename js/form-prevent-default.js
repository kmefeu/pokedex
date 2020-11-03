// EVITAR ENVIO PADRAO DO FORM

var submit = document.querySelector('form');

submit.onkeydown = (event) => {
    if (event.key === "Enter") { event.preventDefault(); }

};


