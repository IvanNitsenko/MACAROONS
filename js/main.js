$(document).ready(() => {
    new WOW({
        animateClass: 'animate__animated'
    }).init();
    $('.image-link').magnificPopup({type:'image'});
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu-items').classList.add('open');
    };
    document.querySelectorAll('#menu-items > *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu-items').classList.remove('open');
        }
    })
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true
    });
    $('.test-popup-link').magnificPopup({
        type: 'image'
    });
})