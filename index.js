'use strict';


import {hardSkills, softSkills} from "./constants.js";

function bgElement(partId) {
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute('id', `nav-bar__bg-${partId}`);
    return imgContainer
}

function addLoadButton() {
    const loadBtn = document.createElement("button");
    loadBtn.classList.add("resume__btn");

    const link = document.createElement("a");
    link.setAttribute("href", "./assets/documents/cv.pdf");
    link.setAttribute("download", "cv_vkryskiv.pdf");
    link.innerHTML = 'Download';

    loadBtn.appendChild(link);

    return loadBtn;
}

function addLoadIcon() {
    const icon = document.createElement("img");
    icon.classList.add('resume__icon');
    icon.setAttribute('src', './assets/images/icons/load.png');
    return icon;
}

function addResumeBtn() {
    const loadContainer = document.createElement('div');
    loadContainer.classList.add('resume');
    loadContainer.appendChild(addLoadIcon());
    loadContainer.appendChild(addLoadButton());
    return loadContainer;
}

function addPortfolioBtn() {
    const btn = document.createElement("button");
    btn.classList.add('portfolio__btn');
    btn.innerHTML = 'Portfolio'
    return btn;
}

function addProject(title, href) {
    const link = document.createElement("a");
    link.setAttribute('href', href);
    link.setAttribute('target', '_blank');
    link.innerHTML = title;
    return link;
}

function addWhiteLine() {
    const line = document.createElement("div");
    line.classList.add('white-line');
    return line;
}

function addDropDown() {
    const dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add('portfolio__dropdown', 'hidden');
    dropdownContainer.appendChild(addProject(`<span>Project Di-Gi</span>`, 'https://itsvetal.github.io/di-gi'));
    dropdownContainer.appendChild(addWhiteLine());
    dropdownContainer.appendChild(addProject(`<span>My Resume</span>`, 'https://itsvetal.github.io/project-resume'));
    dropdownContainer.appendChild(addWhiteLine());
    dropdownContainer.appendChild(addProject(`<span>Project Trello</span>`, 'https://itsvetal.github.io/trello'));
    return dropdownContainer;
}

function createPortfolioBtn() {
    const portfolioContainer = document.createElement("div");
    portfolioContainer.classList.add('portfolio');
    portfolioContainer.appendChild(addPortfolioBtn());
    portfolioContainer.appendChild(addDropDown());

    portfolioContainer.addEventListener('click', () => {
        const dropDown = document.querySelector('.portfolio__dropdown');
        const isHidden = dropDown.classList.contains('hidden');

        isHidden
            ? dropDown.classList.remove('hidden')
            : dropDown.classList.add('hidden');
    });

    return portfolioContainer;
}

function addButtons() {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("nav-buttons");
    // btnContainer.appendChild(createPortfolioBtn());
    btnContainer.appendChild(addResumeBtn());

    return btnContainer;
}

function createNavBar() {
    const nav = document.createElement('div');
    nav.classList.add('nav-bar');

    for (let i = 0; i < 5; i++) {
        nav.appendChild(bgElement(i + ""));
    }

    nav.appendChild(addButtons())
    return nav;
}

function AddResumeLogo() {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('page-header__content__img');

    const img = document.createElement('img');
    img.setAttribute('src', `./assets/images/profile/logo.jpg`);
    img.setAttribute('alt', `logo for resume`);

    imageContainer.appendChild(img);
    return imageContainer;
}

function createHeading() {
    const textContainer = document.createElement('div');
    textContainer.classList.add('page-header__content__text');

    const h1 = document.createElement('h1');
    h1.textContent = 'VITALII KRYSKIV';

    const h2 = document.createElement('h2');
    h2.textContent = `FULL-STACK DEVELOPER ReactJS / NextJS / Laravel`;

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

function addHeading(text, tag, interval = '', hr = null, isAside = false) {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add(`heading__${tag}`);
    const heading = document.createElement(tag);
    heading.innerHTML = text;
    hr || isAside ? heading.style.textDecoration = 'none' : heading.style.textDecoration = 'underline';
    headerContainer.appendChild(heading);

    if (interval) {
        const span = document.createElement('span');
        span.style.color = 'gray';
        span.style.fontSize = '16px';
        span.innerHTML = interval;
        headerContainer.style.display = 'flex';
        headerContainer.style.justifyContent = 'space-between';
        headerContainer.style.alignItems = 'center';
        heading.style.marginBottom = '0px';
        headerContainer.appendChild(span);
    }

    if (hr) {
        const hr = document.createElement('hr');
        headerContainer.appendChild(hr);
        hr.style.marginTop = '5px';
        heading.style.marginBottom = '0';
        heading.style.marginTop = '0';
    }

    return headerContainer
}

function addContactIcon(src, href) {
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('contact__icon');

    const link = document.createElement('a');
    link.setAttribute('href', href);
    link.setAttribute('target', 'blank')

    const img = document.createElement('img');
    img.setAttribute('src', `${src}`);

    link.appendChild(img);
    iconContainer.appendChild(link);

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
    contactContainer.appendChild(addContactIcon(iconSrc, linkHref));
    contactContainer.appendChild(addContactLink(linkHref, text));
    return contactContainer;
}

function addContacts() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contacts');
    const contactHead = addHeading('CONTACT', 'h1', '', false, true);
    contactHead.classList.add('contacts__head');
    contactContainer.appendChild(contactHead);

    contactContainer.appendChild(addContact(`./assets/images/icons/phone.png`,
        `tel:+380683097010`, '+380683097010'));

    contactContainer.appendChild(addContact(`./assets/images/icons/mail.png`,
        `mailto: vitaliykriskiv@gmail.com`,
        `vitaliikryskiv@gmail.com`));

    contactContainer.appendChild(addContact(`./assets/images/icons/location.png`,
        `https://www.google.com/maps?q=Kropyvnytskyi'`, 'Kropyvnytskyi'));

    contactContainer.appendChild(addContact(`./assets/images/icons/telegram.png`,
        `https://t.me/iTs_Vetal`, '@iTs_Vetal'));

    contactContainer.appendChild(addContact(`./assets/images/icons/linkedin.png`,
        `https://www.linkedin.com/in/vitalii-kryskiv-6bab21306/`, 'vitalii-kryskiv'));

    contactContainer.appendChild(addContact(`./assets/images/icons/github.png`,
        `https://github.com/itsvetal?tab=repositories`, 'Repositories'));

    return contactContainer;
}

function addEducation() {
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('education');
    educationContainer.appendChild(addHeading('EDUCATION', 'h1', '', false, true));
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

function createList(text, head, className, tagName = null) {
    const listContainer = document.createElement('div');
    listContainer.classList.add(`${className}`);

    if (tagName === 'h1') {
        listContainer.appendChild(addHeading(head, "h1", '', false, true));
    } else if (tagName && head) {
        const title = document.createElement(tagName);
        title.style.marginBottom = '10px';
        title.style.fontSize = '20px';
        title.style.fontFamily = 'Merriweather';
        title.innerHTML = head;
        listContainer.appendChild(title);
    }

    const ul = document.createElement('ul');
    ul.style.marginTop = '0px';
    ul.classList.add(`${className}__list`);

    text.forEach(str => {
        const li = document.createElement('li');
        if (tagName !== 'h1') {
            li.style.fontSize = '20px';
            li.style.fontStyle = 'italic';
            li.style.color = 'gray';
        }
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
    aside.appendChild(createList(hardSkills, 'HARD SKILLS', 'soft-skills', 'h1'));
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
    profileContainer.appendChild(addHeading('PROFILE', 'h2', '', 'hr'));

    const textContainer = document.createElement('div');
    textContainer.classList.add('profile-text');
    const text = document.createElement('p');
    text.innerHTML = `Full-Stack Developer with hands-on experience in developing and maintaining modern web applications using React, Next.js, Laravel, Inertia.js, and Moonshine Admin.
Experienced in building both frontend and backend parts of projects — from adaptive UI to backend architecture and admin panels.
I enjoy solving complex problems, improving performance, and creating reliable, scalable applications that meet business goals.`;

    textContainer.appendChild(text);
    profileContainer.appendChild(textContainer);
    return profileContainer;
}

function addRoleTitle(role) {
    const roleTitle = addHeading(role, 'h2', '', false, true);
    roleTitle.style.marginTop = '20px';
    roleTitle.classList.add('work-exp__role');
    return roleTitle;
}

function addProjectTitle(title) {
    const projectTitle = addHeading(title, 'h2', '', false, true);
    projectTitle.style.marginTop = '20px';
    projectTitle.classList.add('work-exp__project');
    return projectTitle;
}

function addWorkExp() {
    const textContainer = document.createElement('div');
    textContainer.classList.add('work-exp__text');

    //AFINA WORDPRESS (ROOTS STACK)
    textContainer.appendChild(addHeading('Private company (Contract)', 'h2', 'February 2026 - April 2026'));
    textContainer.appendChild(addRoleTitle('Full-stack Developer / WordPress (Roots Stack)'));

    const intro = document.createElement('p');
    intro.classList.add('work-exp__intro');
    intro.innerHTML = 'Developed 15+ landing pages and WordPress-based project using a\n' +
        'modern stack: Bedrock + Sage + Acorn with a full development cycle:\n' +
        'from layout implementation to deployment and CMS customization.';
    textContainer.appendChild(intro);

    textContainer.appendChild(addProjectTitle('Landing pages:'));
    textContainer.appendChild(createList([
        'PHP', 'JavaScript', 'HTML', 'CSS'
    ], 'Tech Stack', 'work-exp__list', 'h3'));
    textContainer.appendChild(createList([
        'Built landing pages using PHP, JavaScript, HTML, and CSS',
        'Configured SEO fundamentals (meta tags, sitemap.xml, robots.txt) to improve indexing',
        'Deployed landings to hosting environments and configured domains',
        'Set up and configured Nginx (SSL certificates, redirects, domain routing)',
    ], 'Responsibilities:', 'work-exp__list', 'h3'));

    textContainer.appendChild(addProjectTitle('WordPress (Roots Stack) project'));
    textContainer.appendChild(createList([
        'PHP', 'WordPress', 'Bedrock', 'Sage', 'Acorn', 'Alpine.js', 'Ajax', 'JavaScript',
        'HTML5', 'CSS3', 'Tailwind', 'Swiper', 'ACF'
    ], 'Tech Stack', 'work-exp__list', 'h3'));
    textContainer.appendChild(createList([
        'Developed a full project using Bedrock, Sage, and Acorn',
        'Applied clean architecture principles: DTO (Data Transfer Objects), Service layer, Repository pattern',
    'Used Blade templating engine and reusable Blade components',
    'Integrated Advanced Custom Fields (ACF) without relying on Gutenberg/block editor',
    'Customized WordPress admin panel for project-specific needs',
    'Optimized WordPress by removing unnecessary styles, scripts and default features'
    ], 'Responsibilities:', 'work-exp__list', 'h3'));


    //DOROSHENKO AGENCY
    textContainer.appendChild(addHeading(`Doroshenko Agency`, 'h2', 'November 2024 - December 2025'));
    textContainer.appendChild(addRoleTitle('Full-Stack Developer'));

    textContainer.appendChild(addProjectTitle('American project  MoveUp -  Internet platform for US  Trucking company'));
    textContainer.appendChild(createList([
        'TypeScript, React.js, React Context, React Query, Redux, Lodash',
        'Tailwind CSS, SASS, Material UI, Swiper.js, Axios, Git, ESLint',
        'PHP, Laravel, Inertia.js,  Moonshine, Tiny Mce, Docker, MySQL'
    ], 'Tech Stack:', 'work-exp__list', 'h3'));
    textContainer.appendChild(createList([
        'Optimized database queries, reducing the number of SQL requests by over 95%, which significantly improved system performance and loading speed',
        'Developed a custom admin panel using Moonshine, for the platform portal',
        'Adapted the front end of the portal for filling  from the admin panel',
        'Maintained and improved a logistics portal for US Trucking company and its subsidiaries',
        'Added new features and reworked legacy functionality to meet updated business requirements',
        'Redesigned key UI components to improve usability and visual consistency',
        'Developed React components and integrated them via Inertia.js',
        'Actively cooperated with the team to deliver stable production updates'
    ], 'Responsibilities:', 'work-exp__list', 'h3'));

    textContainer.appendChild(addProjectTitle('Project  DentPro - Internet store for dental company'));
    textContainer.appendChild(createList([
        'TypeScript, React.js, Next.js, SSR (Server Side Rendering), Redux',
        'Swiper.js, Tailwind CSS, REST API, Tawk API, Axios, Git, ESLint, Prettier, Husky,',
        'PHP, Laravel / Socialite / Sanctum,  Moonshine, Tiny Mce, Spatie, Docker, MySQL'
    ], 'Tech Stack:', 'work-exp__list', 'h3'));
    textContainer.appendChild(createList([
        'Built a website from scratch using Next.js + Laravel',
        'Configured Dynamic routing',
        'Used SSR (Server Side Rendering) in Next.js to load pages quickly',
        'Implemented SEO optimization (metatags, dynamic headers, Open Graph)',
        'Created and configured the admin panel using the Moonshine library',
        'Configured the admin panel in Moonshine for managing products, languages, and content blocks',
        'Implemented multilingualism (uk/ru/en) through API translations from the admin panel',
        'Configured the data structure',
        'Implemented authentication via Laravel Sanctum and social login (Google, Facebook)',
        'Integrated Tawk.to chat for real-time client communication',
        'Created a fully responsive UI with Tailwind CSS, ensuring pixel-perfect adaptation'
    ], 'Responsibilities:', 'work-exp__list', 'h3'));

    textContainer.appendChild(addProjectTitle('Project  Glass Manufacturing Company Store'));
    textContainer.appendChild(createList([
        'JavaScript, React.js, Next.js, Axios',
        'Laravel, Moonshine, Spatie,',
    ], 'Tech Stack:', 'work-exp__list', 'h3'));
    textContainer.appendChild(createList([
        'Reworked and improved admin panel on Moonshine',
        'Refactored Laravel models and relationships, improving data consistency',
        'Improved UX/UI',
        'Adjusted product cards and fixed issue with product filters',
    ], 'Responsibilities:', 'work-exp__list', 'h3'));

    //TOPIZDATO
    textContainer.appendChild(addHeading(`Top Izdato - Intership`, 'h2', 'August 2024 – November 2024'));
    textContainer.appendChild(addRoleTitle('Front-End Intern / Junior Developer'));
    textContainer.appendChild(createList(['Created an admin panel for lead management with CRM integration using React, Redux Toolkit, and REST API.',
        'Improved project structure and routing', 'Styled the UI with support for dynamic color themes (CSS, SCSS)',
        'Gained experience working in a collaborative environment and version control with Git'], '', 'work-exp__list', 'h3'));


    //SCHOOL ++
    textContainer.appendChild(addHeading(`Developer courses at School++`, 'h2', 'February 2024 - August 2024'));
    textContainer.appendChild(createList(['Studies Algorithms and Data structures, Object-Oriented\n' +
    'Programming (OOP), Basics of Java', 'Creates my versions of such popular collections as ArrayList,\n' +
    'LinkedList, Stack and Queue'], 'Computer Science', 'work-exp__list', 'p'));
    textContainer.appendChild(createList(['Studies responsible web design, Cascading Style Sheets(CSS, SASS),' +
    ' TypeScript(Strict mode) + React (functional and class style) + Redux', 'Now I\'m developing my project the clone of the trello'], 'Front-end Developing', 'work-exp__list', 'h3'));

    return textContainer;
}

function createWorkExpContent() {
    const workExpContent = document.createElement('div');
    workExpContent.classList.add('work-exp__content');
    workExpContent.appendChild(createVertical());
    workExpContent.appendChild(addWorkExp());
    return workExpContent;
}

function createWorkExp() {
    const workExpContainer = document.createElement('div');
    workExpContainer.classList.add('work-exp');
    workExpContainer.appendChild(addHeading('WORK EXPERIENCE', 'h2', '', 'hr'));
    workExpContainer.appendChild(createWorkExpContent());
    return workExpContainer;
}

function createHardSkills() {
    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('hard-skills');
    skillsContainer.appendChild(addHeading('HARD SKILLS', 'h1', 'hr'));
    skillsContainer.appendChild(createList(hardSkills, "", 'hard-skills'));
    return skillsContainer;
}

function createReferenceContent(name, linkedInTitle, linkedInLink, telegramTitle, telegramLink) {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('reference__content');

    contentContainer.appendChild(addHeading(name, 'h2', '', false, true));
    contentContainer.appendChild(addContact(`./assets/images/icons/linkedin.png`,
        linkedInLink, linkedInTitle));
    contentContainer.appendChild(addContact(`./assets/images/icons/telegram.png`,
        telegramLink, telegramTitle));
    return contentContainer;
}

function createReference() {
    const wrapper = document.createElement('div');
    wrapper.appendChild(addHeading('REFERENCE', 'h2', '', 'hr'));

    const referenceContainer = document.createElement('div');
    referenceContainer.style.display = 'flex';
    referenceContainer.style.justifyContent = 'space-between';

    const firstReference = document.createElement('div');
    firstReference.classList.add('reference');
    firstReference.appendChild(createReferenceContent(
        'Anton Ivanov',
        'vredniytony',
        'https://www.linkedin.com/in/vredniytony/?originalSubdomain=ua/',
        '@VredniyTony',
        'https://t.me/VredniyTony'
    ));
    referenceContainer.appendChild(firstReference);

    const secondReference = document.createElement('div');
    secondReference.classList.add('reference');
    secondReference.appendChild(createReferenceContent(
        'Oleksandr Heyder',
        'олександр-хейдер-28758126a',
        'https://www.linkedin.com/in/олександр-хейдер-28758126a/',
        '@alexandr_kheyder',
        'https://t.me/alexandr_kheyder'
    ));
    referenceContainer.appendChild(secondReference);

    wrapper.appendChild(referenceContainer);
    return wrapper;
}

function createSectionContent() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('page-section__content');
    contentContainer.appendChild(createProfile());
    contentContainer.appendChild(createWorkExp());
    // contentContainer.appendChild(createHardSkills());
    contentContainer.appendChild(createReference())
    return contentContainer;
}

function createSection() {
    const section = document.createElement('section');
    section.classList.add('page-section');
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

function addFooterContact() {
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-contact');

    const span = document.createElement('span');
    span.innerHTML = 'Contact us:';
    footerContainer.appendChild(span);
    footerContainer.appendChild(addContactLink(`mailto: vitaliikryskiv.development@gmail.com`,
        `vitaliikryskiv.development@gmail.com`));

    return footerContainer;
}

function addCopy() {
    const copyContainer = document.createElement('div');
    copyContainer.classList.add('copy');

    const span = document.createElement('span');
    span.innerHTML = `&copy 2024 all rights reserved.`;
    copyContainer.appendChild(span);

    copyContainer.appendChild(addFooterContact());
    return copyContainer;
}

function addMadeLocation() {
    const madeContainer = document.createElement('div');
    madeContainer.classList.add('made');

    const span = document.createElement('span');
    span.innerHTML = `Made with &#10084 in Kropyvnytskyi`;
    madeContainer.appendChild(span);

    return madeContainer;
}

function createFooter() {
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('page-footer');
    footerContainer.appendChild(addCopy());
    footerContainer.appendChild(addMadeLocation())
    return footerContainer;
}

export function generatePage() {
    const container = document.querySelector('.container');
    container.appendChild(createHeader());
    container.appendChild(createMain());
    container.appendChild(createFooter());
}

document.addEventListener('DOMContentLoaded', () => generatePage());
