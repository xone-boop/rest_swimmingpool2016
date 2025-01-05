// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika produk menu di klik
document.querySelector('#produk-menu').
onclick = ( ) => {
navbarNav.classList.toggle('active');
};
//klik luar sidebar 
const produk = document.querySelector('#produk-menu');

document.addEventListener('click', function(e){
    if(!produk.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

});