document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            const warning = document.getElementById('warning');

            setTimeout(function() {
                warning.style.display = 'flex';

            setTimeout(function() {
                warning.style.opacity = '0';
                setTimeout(function() {
                    window.location.href = 'tunnel.html';
                }, 1000); 
            }, 3000);
        }, 1000);
    }
});
});

document.getElementById('nbutton').addEventListener('click', function() {
    const unableWindow = document.getElementById('unable');
    unableWindow.style.display = 'flex'; // Show the #unable div

    setTimeout(function() {
        unableWindow.style.display = 'none';
    }, 3000);
});

const wolf = document.getElementById('wolf');
const chick = document.getElementById('chick');
const button = document.getElementById('powerUp');

let scale1 = 1;
let scale2 = 1;

const maxScale = 2.5;

function enlargeDivs() {
    if (scale1 < maxScale && scale2 < maxScale) {
        scale1 *= 1.1;
        scale2 *= 1.1;
        
        chick.style.transform = `scale(${scale1})`;
        wolf.style.transform = `scale(${scale2})`;
    } else {
        button.disabled = true;
        button.textContent = "Failed";
    }
}

button.addEventListener('click', enlargeDivs);