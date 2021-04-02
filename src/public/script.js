"use strict";

const menuMob = document.querySelector('.menuMob_open');
const menuMobButton = document.querySelector('.menuMob__button');
const closeButton = document.querySelector('.menuMob__close');

menuMobButton.addEventListener('click', (e) => {
    if (e.target) {
        e.preventDefault();
    }
    menuMob.style.display = "block";
    menuMobButton.style.display = "none";
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener('click', () => {
    menuMob.style.display = "none";
    menuMobButton.style.display = "block";
   document.body.style.overflow = "";
});

const bloger = document.querySelectorAll('.blog');
const blogersColor = document.querySelectorAll('.blogers__color');

function show() {
    bloger.forEach((item, i) => {
        item.addEventListener('mouseover', (e) => {
            console.log(blogersColor[i]);
            blogersColor[i].style.opacity = "0";
        })
    })
};

function close() {
    bloger.forEach((item, i) => {
        item.addEventListener('mouseout', (e) => {
            console.log(blogersColor[i]);
            blogersColor[i].style.opacity = "0.5";
        })
    })
};

show();
close();

const filtersButtonOpen = document.querySelectorAll('.filters__button_open');
const filtersOpen = document.querySelectorAll('.filters_open');
const closeFilter = document.querySelectorAll('.closeFilter_svg');

function filterShow() {
    filtersButtonOpen.forEach((item, id) => {
        item.addEventListener('click', (e) => {
            item.classList.add("filters_trunsform");
            filtersOpen[id].style.display = 'block';
        });
    });
};

function filterClose() {
    closeFilter.forEach((item, id) => {
        item.addEventListener('click', (e) => {
            filtersOpen[id].style.display = 'none';
            filtersButtonOpen[id].classList.remove("filters_trunsform");
        });
    });
};

filterShow();
filterClose();



