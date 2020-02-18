// MAP - code written according to Leaflet documentation 

var mymap = L.map('map').setView([37.9, -8.11], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//  MARKERS - code written according to Leaflet documentation 

var marker1 = L.marker([37.43, -8.77]).addTo(mymap)
    .bindPopup('Parque Natural do Sudoeste Alentejano e Costa Vicentina')
    .openPopup();

var marker2 = L.marker([37.64, -7.66]).addTo(mymap)
    .bindPopup('Parque Natural do Vale do Guadiana');

var marker3 = L.marker([38.57, -7.9]).addTo(mymap)
    .bindPopup('Évora');

var marker4 = L.marker([37.13, -7.65]).addTo(mymap)
    .bindPopup('Tavira');

var marker5 = L.marker([37.65, -8.8]).addTo(mymap)
    .bindPopup('Praia de Almograve');

var marker6 = L.marker([37.09, -8.41]).addTo(mymap)
    .bindPopup('Praia da Marinha');