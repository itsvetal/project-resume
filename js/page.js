'use strict';

function bgImage(image, partId) {
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute('id', `nav-bar__bg__img-${partId}`);

    // const img = document.createElement("img");
    // img.setAttribute("src", `..//assets/images/${image}`);

    // imgContainer.appendChild(img);

    return imgContainer
}

function navBackground() {
    const navBg = document.createElement('div');
    navBg.classList.add('nav-bar__bg');
    navBg.appendChild(bgImage('rect_1.png', '1'));
    navBg.appendChild(bgImage('rect_2.png', '2'));
    navBg.appendChild(bgImage('rect_3.png', '3'));
    navBg.appendChild(bgImage('rect_4.png', '4'));
    navBg.appendChild(bgImage('rect_5.png', '5'));

    return navBg;
}

function navBar() {
    const nav = document.createElement('div');
    nav.classList.add('nav-bar');
    nav.appendChild(navBackground());

    return nav;
}

function createHeader(container) {
    const header = document.createElement("header");
    header.classList.add("page-header");
    container.appendChild(header);
    header.appendChild(navBar());
}

function generatePage() {
    const container = document.querySelector('.container');
    createHeader(container);

}
