window.onscroll = function () {

  async function paratudo() {

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("entrou")

     await loadMore().then(async () => await loadPoke());

    }
  }
  paratudo()
  // setTimeout(()=>{ console.log("parou") }, 1000);
};


// colocar uma função dentro da outra com await ao invés de set time out ???
