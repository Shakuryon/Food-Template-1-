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

function initMap() {

    const restaurantLocation = {
        lat: 30.658811725803577,
        lng: -88.09931563699634
    };


    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            center: restaurantLocation,
            zoom: 15,

            styles: [
                {
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#FFF8EF"
                        }
                    ]
                },

                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#B8D8E8"
                        }
                    ]
                },

                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#F4D8A8"
                        }
                    ]
                },

                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                }
            ]
        }
    );


    new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: "My Momma's House",

        icon:{
            url:"./assets/images/mapMarker.webp",

            scaledSize: new google.maps.Size(45,45)
        }
    });

}

async function loadGoogleMaps() {

    try {

        const response = await fetch("/api/maps-key");

        const data = await response.json();

        const script = document.createElement("script");

        script.src = `https://maps.googleapis.com/maps/api/js?key=${data.key}`;

        script.async = true;
        script.defer = true;

        document.head.appendChild(script);

        script.onload = () => {
            initMap();
        };

    }

    catch(error) {
        console.error("Google Maps failed to load:", error);
    }
}


loadGoogleMaps();