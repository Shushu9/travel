'use strict'


console.log("Самооценка:\n1. Верстка валидная +10; \n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\n Итог: 110 баллов.");

const pageUp = document.querySelector(".pageup");

pageUp.onclick = function () {
    window.scrollTo(scrollY, 0);
};

window.addEventListener('scroll', function () {
    pageUp.hidden = (scrollY < document.documentElement.clientHeight);
});





// Hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});




// $(document).ready(function () {


    // Smooth scroll and pageup





    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 600) {
    //         $('.pageup').fadeIn();
    //     } else {
    //         $('.pageup').fadeOut();
    //     }
    // });

    // $("a").on('click', function (event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
    //         var hash = this.hash;
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function () {
    //             window.location.hash = hash;
    //         });
    //     }
    // });






// });

