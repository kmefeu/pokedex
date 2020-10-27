// var listElm = document.querySelector('#infinite-list');

// // Add 20 items.
// var nextItem = 1;
// var loadMore = function() {
//   for (var i = 0; i < 20; i++) {
//     var item = document.createElement('li');
//     item.innerText = 'Item ' + nextItem++;
//     listElm.appendChild(item);
//   }
// }

// Detect when scrolled to bottom.
// listElm.addEventListener('scroll', function() {
//   if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
//     loadMore();
//   }
// });

// Initially load some items.
// loadMore();


function popup (){

alert("Carrega mais 10");

}


window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
     //User is currently at the bottom of the page
     loadMore().then(async () => await loadPoke());

  }
};
