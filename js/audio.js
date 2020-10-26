
 let audio = document.querySelector('#Aplayer')
// audio.setAttribute('src', "/../assets/audio/pop.mp3");

document.querySelectorAll(".pokeTumb").addEventListener("mouseover", function () {

    audio.currentTime = 0;
    audio.play();
    // setTimeout(function () {
    //     audio.pause();
    // }, 1500);


})
