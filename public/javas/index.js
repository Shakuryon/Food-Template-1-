document.addEventListener('DOMContentLoaded', () => {

    const mainNav = document.getElementById('navBarCont');
    const scrollThres = 60; // Number of pixels before transformation

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThres) {
            mainNav.classList.add('scrolled');
        }

        else {
            mainNav.classList.remove('scrolled')
        }
    })

});