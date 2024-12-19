document.addEventListener('DOMContentLoaded', function() {
    const playIcon = document.getElementById("playIcon");
    const muteIcon = document.getElementById("muteIcon");
    const audio = document.getElementById("waves");

    playIcon.addEventListener('click', () => {
        audio.play();
        playIcon.style.visibility = 'hidden';
        muteIcon.style.visibility = 'visible';
    });

    muteIcon.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playIcon.style.visibility = 'visible';
        muteIcon.style.visibility = 'hidden';
    });

    const s1a1 = document.getElementById("s1a1");
    s1a1.addEventListener('click', () => {
        window.open("https://codepen.io/Andrew-Wong-the-looper/pen/yLdwGZX");
    })

});