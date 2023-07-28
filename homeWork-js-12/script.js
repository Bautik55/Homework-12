const arrayImg = document.querySelectorAll('.img-wrapper');
const colorizeCheckbox = document.querySelector('#colorize-checkbox');

colorizeCheckbox.addEventListener('change', () => {
    if (colorizeCheckbox.checked) {
        arrayImg.forEach((img) => {
            img.classList.add('bg-red');
        });
    } else {
        arrayImg.forEach((img) => {
            img.classList.remove('bg-red');
        });
    }
});

arrayImg.forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.toggle('bg-red');
        checkAllImagesColored();
    });
});

function checkAllImagesColored() {
    let allColored = true;
    arrayImg.forEach((img) => {
        if (!img.classList.contains('bg-red')) {
            allColored = false;
        }
    });

    colorizeCheckbox.checked = allColored;
}

let num = 0;
const startCounter = setInterval(() => {
    num++;
    arrayImg.forEach((img, idx) => {
        if (num === 1) {
            if (idx === 1 || idx === 2 || idx === 6 || idx === 10 || idx === 14 || idx === 18) {
                img.classList.toggle('bg-red');
            }
        } else if (num === 2) {
            if (idx === 1 || idx === 2 || idx === 6 || idx === 10 || idx === 14 || idx === 18) {
                img.classList.toggle('bg-red');
            }
        }
    });

    checkAllImagesColored();
}, 1000);