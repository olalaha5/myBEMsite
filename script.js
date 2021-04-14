function sliderMove() {
    let positionNext = 2;
    let position = 1;
    let points = document.querySelectorAll('.slider__point');
    let slider = document.querySelector('.slider__wrap');
    let right = 100;
    function slide(elem, pos, posNext) {
        let time = 2000;
        let startSlide = setInterval(() => {
            right += posNext - pos;
            elem.style.right = `${right}vw`;
        }, time / 100);
        setTimeout(() => {
            clearInterval(startSlide);
            right = Math.round(right / 100) * 100;
            elem.style.right = `${right}vw`;
        }, time + 1);
    };
    setInterval(() => {
        slide(slider, position, positionNext);
        points[position].classList.remove('slider__point_active');
        points[positionNext].classList.add('slider__point_active');
        position = positionNext;
        positionNext = (positionNext === 2) ? 0 : positionNext + 1;
    }, 5000);
};
sliderMove();


function dropMenu() {
    let button = document.querySelector('.nav__menu');
    let link = document.querySelectorAll('.nav__link');
    let loc = false;
    document.onclick = (event) => {
        if (!loc) {
            loc = false
            for (let i = 0; i < link.length; i++) {
                link[i].style.display = 'none';
            };
        };
    };
    button.onclick = () => {
        loc = true;
        for (let i = 0; i < link.length; i++) {
            link[i].style.display = (link[i].style.display == 'block') ? 'none' : 'block'
        };
    };
};
if (document.body.clientWidth <= 883) {
    dropMenu()
}