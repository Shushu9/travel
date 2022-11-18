'use strict'


// console.log("Самооценка pt1:\n1. Верстка валидная +10; \n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\n Итог: 110 баллов.");

// console.log("Самооценка pt2:\n1. Вёрстка соответствует макету. Ширина экрана 390px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22\n\n Итог: 85 баллов.");

// Крестик в меню и пиксель пёрфект модалок и меню


window.addEventListener('DOMContentLoaded', () => {

    // SCROLL on top arrow
    const pageUp = document.querySelector(".pageup");

    // если не скрыть, то кнопка будет видна до начала скролла 
    pageUp.hidden = true;

    pageUp.onclick = function () {
        window.scrollTo(scrollY, 0);
    };

    window.addEventListener('scroll', function () {
        pageUp.hidden = (scrollY < document.documentElement.clientHeight);
    });



    // HAMBURGER


    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger'),
        navOverlay = document.querySelector('.nav__overlay');

    function toggleMenu() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        navOverlay.classList.toggle('nav__overlay_active')
    };


    hamburger.addEventListener('click', toggleMenu);

    menuItem.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });

    navOverlay.addEventListener('click', toggleMenu);


    /// MODAL 

    const modalLoginTriggers = document.querySelectorAll('[data-login]'),
        modalNewAccTrigger = document.querySelector('[data-acc]'),
        modalOverlay = document.querySelector('.overlay'),
        modalLogIn = document.querySelector('#logIn'),
        modalCreateAcc = document.querySelector('#createAccount'),
        modalSubmit = document.querySelectorAll('.button_modal'),
        modalSignIn = modalLogIn.querySelector('.button_modal'),
        modalEmail = modalLogIn.querySelector('#mail'),
        modalPassword = modalLogIn.querySelector('#password');

    modalSubmit.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
        })
    })


    modalLoginTriggers.forEach(item => {
        item.addEventListener('click', () => {
            modalOverlay.classList.remove('hide');
            modalLogIn.classList.remove('hide');
            modalCreateAcc.classList.add('hide');
            document.body.style.overflow = 'hidden';
        });
    })

    modalNewAccTrigger.addEventListener('click', () => {
        modalOverlay.classList.remove('hide');
        modalCreateAcc.classList.remove('hide');
        modalLogIn.classList.add('hide');
        document.body.style.overflow = 'hidden';
    });

    modalSignIn.addEventListener('click', () => {
        if (modalEmail.value != "" && modalPassword.value != "") {
            alert(`Your E-mail: ${modalEmail.value} \nYour password: ${modalPassword.value}`);
        }
    });


    // Modal close when click on overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('hide');
            modalLogIn.classList.add('hide');
            modalCreateAcc.classList.add('hide');
            document.body.style.overflow = '';
        }
    });

    // Modal close when tap Esc button
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && !modalOverlay.classList.contains('hide')) {
            modalOverlay.classList.add('hide');
            modalLogIn.classList.add('hide');
            modalCreateAcc.classList.add('hide');
            document.body.style.overflow = '';
        }
    })



    //Slider 

    const slides = document.querySelectorAll('.slide'),
        prev = document.querySelector('.destinations__arrows-prev'),
        next = document.querySelector('.destinations__arrows-next'),
        slidesContainer = document.querySelector('.slider__container'),
        slidesField = document.querySelector('.slider__inner'),
        width = slidesContainer.clientWidth,
        dots = document.querySelectorAll('.dot');

    let slideIndex = 2,
        offset = 0;

    dots[1].style.opacity = 1

    next.addEventListener('click', () => {
        if (offset == 0 - +width) {
            offset = +width;
        } else {
            offset -= +width;
        }

        slidesField.style.transform = `translateX(${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    })

    prev.addEventListener('click', () => {
        if (offset == +width) {
            offset = -(+width);
        } else {
            offset += +width;
        }

        slidesField.style.transform = `translateX(${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    })


    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = width * (2 - slideTo);

            slidesField.style.transform = `translateX(${offset}px)`;

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        })
    })

});


