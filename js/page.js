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
    headerContainer.classList.add(`heading__${tag}`)
    ;
    const heading = document.createElement(tag);
    heading.innerHTML = text;
    headerContainer.appendChild(heading);

    if (hr) {
        const hr = document.createElement('hr');
        headerContainer.appendChild(hr);
        hr.style.marginTop = '5px';
        heading.style.marginBottom = '0';
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
    link.innerHTML = `${text}`;
    link.setAttribute('href', `${href}`);
    link.setAttribute('target', '_blank');
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
        `vitaliikryskiv.development <br>
        @gmail.com`));

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

    const head = document.createElement('p');
    head.innerHTML = years;

    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = profession;
    ul.appendChild(li);

    listContainer.appendChild(head);
    listContainer.appendChild(ul);

    return listContainer;
}

function addEducation() {
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('education');
    educationContainer.appendChild(addHeading('EDUCATION', 'h1'));
    educationContainer.appendChild(addHeading(
        `DNEPROPETROVSK <br>
        NATIONAL MINING <br>
         UNIVERSITY`, 'h2'));
    educationContainer.appendChild(createList([`Bachelor of Engineering
        <br>Mechanics`], '2006-2010', 'education__list', 'p'));
    educationContainer.appendChild(createList([`Specialist of Mining
        <br>Equipment`], '2010-2012', 'education__list', 'p'));

    return educationContainer;
}

function createList(text, head, className, tagName) {
    const listContainer = document.createElement('div');
    listContainer.classList.add(`${className}`);

    if (tagName === 'h1') {
        listContainer.appendChild(addHeading(head, "h1"));
    } else {
        const title = document.createElement('p');
        title.innerHTML = head;
        listContainer.appendChild(title);
    }

    const ul = document.createElement('ul');
    ul.classList.add(`${className}__list`);

    text.forEach(str => {
        const li = document.createElement('li');
        li.innerHTML = str;
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
    aside.appendChild(createList(softSkills, 'SOFT SKILLS', 'soft-skills', 'h1'));
    return aside;
}

function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('vertical-line__dot');
    return dot;
}

function createVertical() {
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('vertical-line');

    lineContainer.appendChild(createDot());
    lineContainer.appendChild(createDot());

    return lineContainer;
}

function createProfile() {
    const profileContainer = document.createElement('div');
    profileContainer.classList.add('profile');
    profileContainer.appendChild(addHeading('PROFILE', 'h1', 'hr'));

    const textContainer = document.createElement('div');
    textContainer.classList.add('profile-text');
    const text = document.createElement('p');
    text.innerHTML = 'Novice front-end developer.\n' +
        'Seeking an opportunity to grow as a Junior Developer and apply my\n' +
        'knowledge in creating innovative software solutions.\n' +
        'No professional experience since in the production, but I work on\n' +
        'collaborative and my own projects, and the results of my work can be\n' +
        'seen on my GitHub. But I am very interested in web development and\n' +
        'I plan to develop in this direction.';

    textContainer.appendChild(text);
    profileContainer.appendChild(textContainer);
    return profileContainer;
}

function addWorkExpText() {
    const textContainer = document.createElement('div');
    textContainer.classList.add('work-exp__text');

    textContainer.appendChild(addHeading(`<span>Development courses in</span> School++`, 'h2'));

    textContainer.appendChild(createList(['Studies Algorithms and Data structures, Object-Oriented\n' +
    'Programming (OOP), Basics of Java', 'Creates my versions of such popular collections as ArrayList,\n' +
    'LinkedList, Stack and Queue'], 'Computer Science', 'work-exp__list', 'p'));

    textContainer.appendChild(createList(['Studies responsible web design, Cascading Style Sheets,\n' +
    'framework React', 'Work on collaborative and on my own projects', 'Now developing my project trello, that looks like a your day\n' +
    'task planner or for working'], 'Front-end Developing', 'work-exp__list', 'p'));


    return textContainer;
}

function createWorkExpContent() {
    const workExpContent = document.createElement('div');
    workExpContent.classList.add('work-exp__content');
    workExpContent.appendChild(addHeading('WORK EXPERIENCE', 'h1', 'hr'));

    workExpContent.appendChild(addWorkExpText());


    return workExpContent;
}

function createWorkExp() {
    const workExpContainer = document.createElement('div');
    workExpContainer.classList.add('work-exp');
    workExpContainer.appendChild(createWorkExpContent());

    return workExpContainer;
}

function createSectionContent() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('page-section__content');
    contentContainer.appendChild(createProfile());
    contentContainer.appendChild(createWorkExp());
    return contentContainer;
}

function createSection() {
    const section = document.createElement('section');
    section.classList.add('page-section');
    section.appendChild(createVertical())
    section.appendChild(createSectionContent());
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
