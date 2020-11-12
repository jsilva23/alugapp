// Create map
const map = L.map('mapid').setView([-8.9011797,13.2730554], 13);


// Create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create icon
const icon = L.icon({
    iconUrl: "./public/img/imobiliaria.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Creat popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Casa para alugar <a href="rent.html?id=1" class="choose-rent"> <img src="./public/img/arrow-white.svg"> </a>')

// Create and  add marker
L.marker([-8.9011797,13.2730554], { icon }).addTo(map)
    .bindPopup(popup);
