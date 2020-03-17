// MAP - code written according to Leaflet documentation 

var mymap = L.map('map').setView([41.29, -7.8], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//The code bellow was adapted from https://stackoverflow.com/questions/23910594/leaflet-responsive-design-creating-different-zoom-levels-for-different-screen - however this only works after refreshing the page for some reason that I don't understand yet
var width = screen.width;
if (width < 541) {
    mymap.setZoom(7);
}  else {
    mymap.setZoom(8);
}
//Here ends the code adapted from https://stackoverflow.com/questions/23910594/leaflet-responsive-design-creating-different-zoom-levels-for-different-screen

//  MAP MARKERS - code written according to Leaflet documentation 

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

// BUTTONS

$(document).ready(function(){
    $("#map-btn1").click(function(){
        $("#place1").removeClass('hidden');
        $("#place2").removeClass('hidden');
        $("#place3").addClass('hidden');
        $("#place4").addClass('hidden');
        $("#place5").addClass('hidden');
        $("#place6").addClass('hidden');
        marker1.addTo(mymap);
        marker2.addTo(mymap);
        marker3.removeFrom(mymap);
        marker4.removeFrom(mymap);
        marker5.removeFrom(mymap);
        marker6.removeFrom(mymap);
    });
    $("#map-btn2").click(function(){
        $("#place1").addClass('hidden');
        $("#place2").addClass('hidden');
        $("#place3").removeClass('hidden');
        $("#place4").removeClass('hidden');
        $("#place5").addClass('hidden');
        $("#place6").addClass('hidden');
        marker1.removeFrom(mymap);
        marker2.removeFrom(mymap);
        marker3.addTo(mymap);
        marker4.addTo(mymap);
        marker5.removeFrom(mymap);
        marker6.removeFrom(mymap);
    });
    $("#map-btn3").click(function(){
        $("#place1").addClass('hidden');
        $("#place2").addClass('hidden');
        $("#place3").addClass('hidden');
        $("#place4").addClass('hidden');
        $("#place5").removeClass('hidden');
        $("#place6").removeClass('hidden');
        marker1.removeFrom(mymap);
        marker2.removeFrom(mymap);
        marker3.removeFrom(mymap);
        marker4.removeFrom(mymap);
        marker5.addTo(mymap);
        marker6.addTo(mymap);
    });
    $("#map-btn4").click(function(){
        $("#place1").removeClass('hidden');
        $("#place2").removeClass('hidden');
        $("#place3").removeClass('hidden');
        $("#place4").removeClass('hidden');
        $("#place5").removeClass('hidden');
        $("#place6").removeClass('hidden');
        marker1.addTo(mymap);
        marker2.addTo(mymap);
        marker3.addTo(mymap);
        marker4.addTo(mymap);
        marker5.addTo(mymap);
        marker6.addTo(mymap);
    });
});