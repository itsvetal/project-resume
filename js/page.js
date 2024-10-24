'use strict';

const softSkills = [
    'Critical Thinking',
    'Problem solving',
    'Time management',
    'Good communication'
]

function bgElement(partId) {
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute('id', `nav-bar__bg-${partId}`);
    return imgContainer
}

function downloadResume() {
    return undefined;
}

function downloadBtn() {
    const btn = document.createElement('button');
    btn.classList.add('nav-bar__btn');
    btn.innerHTML = 'Download';
    btn.addEventListener('click', downloadResume());
    return btn;
}

function createNavBar() {
    const nav = document.createElement('div');
    nav.classList.add('nav-bar');
    nav.appendChild(bgElement('1'));
    nav.appendChild(bgElement('2'));
    nav.appendChild(bgElement('3'));
    nav.appendChild(bgElement('4'));
    nav.appendChild(bgElement('5'));
    nav.appendChild(downloadBtn())
    return nav;
}

function AddResumeLogo() {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('page-header__content__img');

    const img = document.createElement('img');
    img.setAttribute('src', `../assets/images/profile/logo.jpg`);
    img.setAttribute('alt', `logo for resume`);

    imageContainer.appendChild(img);
    return imageContainer;
}

function createHeading() {
    const textContainer = document.createElement('div');
    textContainer.classList.add('page-header__content__text');

    const h1 = document.createElement('h1');
    h1.textContent = 'KRYSKIV VITALII';

    const h2 = document.createElement('h2');
    h2.textContent = 'FRONT-END DEVELOPER';

    const hr = document.createElement('hr');

    textContainer.appendChild(h1);
    textContainer.appendChild(h2);
    textContainer.appendChild(hr);

    return textContainer;
}

function createContent() {
    const content = document.createElement('div');
    content.classList.add('page-header__content');
    content.appendChild(AddResumeLogo());
    content.appendChild(createHeading());
    return content;
}

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("page-header");
    header.appendChild(createNavBar());
    header.appendChild(createContent());
    return header;
}

function addHeading(text, tag, hr = null) {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add(`page-aside__${tag}`)
    ;
    const heading = document.createElement(tag);
    heading.textContent = text;
    headerContainer.appendChild(heading);

    if (hr) {
        const hr = document.createElement('hr');
        headerContainer.appendChild(hr);
    }

    return headerContainer
}

function addContactIcon(src) {
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('contact__icon');

    const img = document.createElement('img');
    img.setAttribute('src', `${src}`);

    iconContainer.appendChild(img);

    return iconContainer;
}

function addContactLink(href, text) {
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('contact__link');
    const link = document.createElement('a');
    link.textContent = `${text}`;
    link.setAttribute('href', `${href}`);
    linkContainer.appendChild(link);
    return linkContainer;
}

function addContact(iconSrc, linkHref, text) {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');
    contactContainer.appendChild(addContactIcon(iconSrc));
    contactContainer.appendChild(addContactLink(linkHref, text));
    return contactContainer;
}

function addContacts() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contacts');

    contactContainer.appendChild(addHeading('CONTACT', 'h1'));

    contactContainer.appendChild(addContact(`../assets/images/icons/phone.png`,
        `tel:+380683097010`, '+380683097010'));

    contactContainer.appendChild(addContact(`../assets/images/icons/mail.png`,
        `mailto: vitaliikryskiv.development@gmail.com`,
        'vitaliikryskiv.development@gmail.com'));

    contactContainer.appendChild(addContact(`../assets/images/icons/location.png`,
        `https://www.google.com/maps?q=Kropyvnytskyi'`, 'Kropyvnytskyi'));

    contactContainer.appendChild(addContact(`../assets/images/icons/telegram.png`,
        `https://t.me/iTs_Vetal`, 'iTs_Vetal'));

    contactContainer.appendChild(addContact(`../assets/images/icons/github.png`,
        `https://github.com/itsvetal?tab=repositories`, 'GitHub'));

    contactContainer.appendChild(addContact(`../assets/images/icons/web.png`,
        `https://itsvetal.github.io/`, 'Portfolio'));

    return contactContainer;
}

function addProfList(years, profession) {
    const listContainer = document.createElement('div');
    listContainer.classList.add('education__list');

    const ul = document.createElement('ul');
    ul.innerHTML = years;

    const li = document.createElement('li');
    li.innerHTML = profession;

    ul.appendChild(li);
    listContainer.appendChild(ul);

    return listContainer;
}

function addEducation() {
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('education');
    educationContainer.appendChild(addHeading('EDUCATION', 'h1'));
    educationContainer.appendChild(addHeading('DNEPROPETROVSK\n' +
        'NATIONAL MINING UNIVERSITY', 'h2'));
    educationContainer.appendChild(addProfList('2006-2010', 'Bachelor of Engineering\n' +
        'Mechanics'));

    return educationContainer;
}

function addList(skills, text, className) {
    const listContainer = document.createElement('div');
    listContainer.classList.add(`${className}`);

    listContainer.appendChild(addHeading(text, "h2"));

    const ul = document.createElement('ul');
    ul.classList.add(`${className}__list`);

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = skill;
        ul.appendChild(li);
    })

    listContainer.appendChild(ul);

    return listContainer;
}

function createAside() {
    const aside = document.createElement('aside');
    aside.classList.add('page-aside');
    aside.appendChild(addContacts());
    aside.appendChild(addEducation());
    aside.appendChild(addList(softSkills, 'SOFT SKILLS', 'soft-skills'));
    return aside;
}

function createVerticalHr() {
    const hrContainer = document.createElement('div');
    hrContainer.classList.add('vertical-hr');

    const hr = document.createElement('hr');

    const dot = document.createElement('div');
    dot.classList.add('vertical-hr__dot');

    hrContainer.appendChild(hr);
    hrContainer.appendChild(dot);

    return hrContainer;
}

function createSection() {
    const section = document.createElement('section');
    section.classList.add('section');
    section.appendChild(addHeading('PROFILE', 'h1', 'hr'));
    section.appendChild(createVerticalHr())
    return section;
}

function createMain() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main');
    mainContainer.appendChild(createAside());
    mainContainer.appendChild(createSection());
    return mainContainer;
}

function generatePage() {
    const container = document.querySelector('.container');
    container.appendChild(createHeader());
    container.appendChild(createMain());

}
