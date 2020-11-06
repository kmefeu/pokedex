window.onscroll = async function () {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
    loadCalls = loadCalls+ 1;
    await loadMore()
    await loadPoke();
  }
}