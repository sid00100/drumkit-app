document.addEventListener("keydown", function (e) {
    let keyJs = document.querySelector(`div[data-key-num="${e.keyCode}"]`);
    let audioJs = document.querySelector(`audio[data-key-num="${e.keyCode}"]`);
    keyJs.classList.add("keys-change");
    if (!audioJs) return;
    console.log(audioJs);
    audioJs.currentTime = 0;
    audioJs.play();
    this.addEventListener("transitionend", function(){
        keyJs.classList.remove("keys-change")
    })
})