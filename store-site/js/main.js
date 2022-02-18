const menuBtn = document.querySelector('.header_menu-btn');
const menuContainer = document.querySelector('.header_menu_container');
const header = document.querySelector('#header');

// console.log(menuBtn);
// console.log(header);
// console.log(menuContainer);

menuContainer.addEventListener('click', function() {
    header.classList.remove('menu-open');
});

menuBtn.addEventListener('click', function() {
    if (header.classList.contains('menu-open')) {
        header.classList.remove('menu-open');
    } else {
        header.classList.add('menu-open');
    }
});