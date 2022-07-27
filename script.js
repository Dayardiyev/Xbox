
/* ============= BURGER MENU ============= */

const burger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu')
const nav = document.querySelectorAll('.header-nav ul a')

burger.addEventListener('click', () => {
    headerMenu.classList.toggle('active')
})

nav.forEach(item => {
    item.addEventListener('click', () => {
        headerMenu.classList.remove('active')
    })
})


/* ============= SCROLL ANIMATION ============= */

const section = document.querySelectorAll('section')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    section.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('fade-in')
        }
    })
}

/* ============= FAQ EXPAND ============= */

const arrow = document.querySelectorAll('.faq-text');
const fag = document.querySelectorAll('.faq-item');
const info = document.querySelectorAll('.faq-subtitle')

arrow.forEach((item, idx) => {
    item.addEventListener('click', () => {
        info[idx].classList.toggle('active')
        item.classList.toggle('active')
    })
})