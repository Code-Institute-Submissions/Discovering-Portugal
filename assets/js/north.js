// MAP - code written according to Leaflet documentation 

var mymap = L.map('map').setView([41.29, -7.8], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//  MARKERS - code written according to Leaflet documentation 

var marker1 = L.marker([41.8, -8.25]).addTo(mymap)
    .bindPopup('GERÊS <br> ???')
    .closePopup();

var marker2 = L.marker([40.4, -7.55]).addTo(mymap)
    .bindPopup('SERRA DA ESTRELA <br> ');

var marker3 = L.marker([41.15, -8.61]).addTo(mymap)
    .bindPopup('PORTO <br> ');

var marker4 = L.marker([40.64, -8.65]).addTo(mymap)
    .bindPopup('AVEIRO <br> ');

var marker5 = L.marker([40.69, -8.73]).addTo(mymap)
    .bindPopup('COSTA NOVA <br> ');

var marker6 = L.marker([41.85, -8.87]).addTo(mymap)
    .bindPopup('PRAIA DO MOLEDO <br> ');