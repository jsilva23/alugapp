// Create map
const map = L.map('mapid').setView([-8.9011797,13.2730554], 13);


// Create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create icon
const icon = L.icon({
    iconUrl: "/img/casa.svg",
    iconSize: [45, 55],
    iconAnchor: [23, 30],
    popupAnchor: [160, 40]
});

function addMarker({id, business, lat, lng}) {
    // Creat popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${business} <a href="rent?id=${id}"> <img src="/img/arrow-white.svg"> </a>`)

    // Create and  add marker
    L.marker([lat,lng], { icon }).addTo(map)
        .bindPopup(popup);
}

const rentsSpan = document.querySelectorAll('.rents span');

rentsSpan.forEach( span => {
    const rent = {
        id: span.dataset.id,
        business: span.dataset.business,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(rent)
})
