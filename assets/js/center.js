// MAP - code written according to Leaflet documentation 

var mymap = L.map('map').setView([39.32, -8.09], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//  MARKERS - code written according to Leaflet documentation 

var marker1 = L.marker([39.49, -8.76]).addTo(mymap)
    .bindPopup('Serra de Aire e Candeeiros')
    .openPopup();

var marker2 = L.marker([38.49, -8.99]).addTo(mymap)
    .bindPopup('Parque Natural da Arrabida');

var marker3 = L.marker([38.71, -9.14]).addTo(mymap)
    .bindPopup('Lisbon');

var marker4 = L.marker([38.8, -9.38]).addTo(mymap)
    .bindPopup('Sintra');

var marker5 = L.marker([39.6, -8.41]).addTo(mymap)
    .bindPopup('Tomar');

var marker6 = L.marker([39.6, -9.07]).addTo(mymap)
    .bindPopup('Nazaré');
    
var marker7 = L.marker([38.44, -9.1]).addTo(mymap)
    .bindPopup('Sesimbra');