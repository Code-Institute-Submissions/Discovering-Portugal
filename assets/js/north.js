// MAP - code written according to Leaflet documentation 

var mymap = L.map('map').setView([41.09, -7.8], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//  MARKERS - code written according to Leaflet documentation 

var marker1 = L.marker([41.42, -8.08]).addTo(mymap)
    .bindPopup('Gerês')
    .openPopup();

var marker2 = L.marker([40.19, -7.36]).addTo(mymap)
    .bindPopup('Serra da Estrela');

var marker3 = L.marker([41.15, -8.61]).addTo(mymap)
    .bindPopup('Porto');

var marker4 = L.marker([40.64, -8.65]).addTo(mymap)
    .bindPopup('Aveiro');

var marker5 = L.marker([40.69, -8.59]).addTo(mymap)
    .bindPopup('Costa Nova');

var marker6 = L.marker([41.5, -8.80]).addTo(mymap)
    .bindPopup('Praia do Moledo');