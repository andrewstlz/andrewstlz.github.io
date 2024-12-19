document.addEventListener('DOMContentLoaded', function() {
    const playIcon = document.getElementById("playIcon");
    const muteIcon = document.getElementById("muteIcon");
    const audio = document.getElementById("waves");

    playIcon.addEventListener('click', () => {
        audio.currentTime = 1;
        audio.play();
        playIcon.style.visibility = 'hidden';
        muteIcon.style.visibility = 'visible';
    });

    muteIcon.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 1;
        playIcon.style.visibility = 'visible';
        muteIcon.style.visibility = 'hidden';
    });

    const s1a1 = document.getElementById("s1a1");
    s1a1.addEventListener('click', () => {
        window.open("https://codepen.io/Andrew-Wong-the-looper/pen/oNrQdOx");
    })

    const s1a2 = document.getElementById("s1a2");
    s1a2.addEventListener('click', () => {
        window.open("https://codepen.io/Andrew-Wong-the-looper/pen/yLdwGZX");
    })

    const s1a3 = document.getElementById("s1a3");
    s1a3.addEventListener('click', () => {
        window.open("https://andrewstlz.github.io/s1fp/index.html");
    })

    const s2a1 = document.getElementById("s2a1");
    s2a1.addEventListener('click', () => {
        window.open("https://docs.google.com/document/d/1LEvmMDQPwIu4e5IUuGaCwMIkd8Cn9y-lYwGqWoAcP8s/edit?tab=t.0");
    })

    const s2a2 = document.getElementById("s2a2");
    s2a2.addEventListener('click', () => {
        window.open("https://andrewstlz.github.io/s1fp/jump.html");
    })

    const s2a3 = document.getElementById("s2a3");
    s2a3.addEventListener('click', () => {
        window.open("https://editor.p5js.org/andrewzx/full/e7kDZEjT2");
    })

    const s3a1 = document.getElementById("s3a1");
    s3a1.addEventListener('click', () => {
        window.open("https://andrewstlz.github.io/s3a1/index.html");
    })

    const s3a2 = document.getElementById("s3a2");
    s3a2.addEventListener('click', () => {
        window.open("https://andrewstlz.github.io/s3a2/index.html");
    })

    const s3a3 = document.getElementById("s3a3");
    s3a3.addEventListener('click', () => {
        window.open("https://editor.p5js.org/andrewzx/full/Mt-fd2xnj");
    })



});