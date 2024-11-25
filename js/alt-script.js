const images = document.querySelectorAll(".container .img");

function panImages() {
    let mainBox = document.documentElement.getBoundingClientRect(),
        boxWidth = mainBox.width;

    let {clientX: x, clientY: y} = event;
    images.forEach(function(image) {
        let percentX = (x / 2 / boxWidth * 100) + 25;

        let panImageAnimation = [
            {
                backgroundPosition: `${percentX}% 0`
            }
        ]
        image.animate(panImageAnimation, {duration: 1500, fill: 'forwards', easing: 'cubic-bezier(.6,-0.02,.49,1.26)'})
    })
}

function hasTouchSupport() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
console.log(!hasTouchSupport());

if (!hasTouchSupport()) {
    const descriptions = document.querySelectorAll(`.container ul li`);
    descriptions.forEach(description => {
        description.style.opacity = '0';
    });
}

function focusImage(image) {
    const description = document.querySelector(`.container > div > :nth-child(${image.getAttribute("data-index")}) ul li`),
        button = document.querySelector(`.container > div > :nth-child(${image.getAttribute("data-index")}) .btn-custom`);

    if (hasTouchSupport()) return; 
    description.style.opacity = '1';
    description.style.lineHeight = '1.5rem';
    button.style.color = 'var(--color3)';
    button.style.borderColor = 'var(--color3)';
    button.style.backgroundColor = 'gold';
}

function unFocusImage(image) {
    const description = document.querySelector(`.container > div > :nth-child(${image.getAttribute("data-index")}) ul li`),
        button = document.querySelector(`.container > div > :nth-child(${image.getAttribute("data-index")}) .btn-custom`);

    if (hasTouchSupport()) return; 
    description.style.opacity = '0';
    description.style.lineHeight = '2.5rem';
    button.style.color = 'gold';
    button.style.borderColor = 'gold';
    button.style.backgroundColor = 'transparent';
}

function moveTrailer() {
    
}