const map = L.map('mapid').setView([-8.9011797,13.2730554], 13);

// Create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "./public/img/casa.svg",
    iconSize: [45, 55],
    iconAnchor: [23, 30]
});

let marker;

// Create and  add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
});


// adding photo field

function addPhotoField() {
    const container = document.querySelector('#images');
    const fieldsContainer = document.querySelectorAll('.new-upload');

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);


    const input = newFieldContainer.children[0];

    if (input.value == '') {
        return
    }

    input.value = '';

    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    if (fieldsContainer.length < 2) {
        
        span.parentNode.children[0].value = '';

        return
    }

    span.parentNode.remove();
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}

function toggleSelect2(event) {
    document.querySelectorAll('.button-select2 button').forEach(button => button.classList.remove('active'));

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}
