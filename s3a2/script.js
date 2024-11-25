const girl = document.getElementById("girl");
const exam = document.getElementById("exam");
const curious = document.getElementById("curious");
const cry = new Audio("cry.wav");

girl.addEventListener('click', () => {
    exam.style.display = 'block';
    document.body.style.cursor = 'default';
    curious.style.visibility = 'hidden';

    cry.play();
    setTimeout(() => {
        console.log("Stopping audio");
        cry.pause();
        cry.currentTime = 0;
      }, 10000);
  });

const okay = document.getElementById('okay');
const nokay = document.getElementById('nokay');
const page2 = document.getElementById('page2');

okay.addEventListener('click', () => {
    page2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    cry.pause();
})

nokay.addEventListener('click', () => {
    page2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    cry.pause();
})