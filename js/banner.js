var slider = new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll:1,
    draggable: false,
    /*arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }*/
})
slideAutoPaly(slider, '.glider');
function slideAutoPaly(glider, selector, delay = 3000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;
    function slide() {
        autoplay = setInterval(() => {
            if (nextIndex >= slidesCount) {
                if (!repeat) {
                    clearInterval(autoplay);
                } else {
                    nextIndex = 0;
                }
            }
            glider.scrollItem(nextIndex++);
        }, delay);
    }
    slide();
   /* var element = document.querySelector(selector);
    element.addEventListener('mouseover', (event) => {
        if (pause) {
            clearInterval(autoplay);
            pause = false;
        }
    }, 300);
    element.addEventListener('mouseout', (event) => {
        if (!pause) {
            slide();
            pause = true;
        }
    }, 300);*/
}