const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get value from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// Create map
const map = L.map('mapid', options).setView([lat, lng], 13);

// Create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/img/casa.svg",
    iconSize: [45, 55],
    iconAnchor: [23, 30],
    popupAnchor: [170, 2]
});


// Create and  add marker

L.marker([lat,lng], { icon }).addTo(map);

// Image gallery

function selectImage(event) {
    const button = event.currentTarget;

    // Remover todas as classes  .active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    
    // Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".real-estate-details > img");

    // Atualizar o container de images
    imageContainer.src = image.src;

    // adicionar a classe .active para este botão
    button.classList.add('active');
}