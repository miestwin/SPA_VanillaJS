const layout = document.getElementById('layout');
const menuLink = document.getElementById('menuLink');

menuLink.addEventListener('click', function (e) {
    layout.classList.toggle('active');
});


