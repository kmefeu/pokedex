window.addEventListener("scroll",infiniteScroll)
async function infiniteScroll() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    document.querySelector(".pokeball").classList.add("roll")
    document.querySelector("#srcPoke").value = "Loading...";  
    await loadMore()
    diploma()
  }}