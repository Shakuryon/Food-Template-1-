document.addEventListener('DOMContentLoaded', () => {
    loadListings(); // async call will eventually trigger initializeCarousel()

    const mainNav = document.getElementById('navBarCont');
    const scrollThres = 80; // Number of pixels before transformation

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThres) {
            mainNav.classList.add('scrolled');
        }

        else {
            mainNav.classList.remove('scrolled')
        }
    })

});