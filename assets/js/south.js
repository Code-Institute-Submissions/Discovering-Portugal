// MAP - code written according to Leaflet documentation 

var mymap = L.map('map').setView([37.9, -8.11], 8);

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

var marker1 = L.marker([37.43, -8.77]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">PARQUE NATURAL DO SUDOESTE ALENTEJANO E COSTA VICENTINA</p> <p style="text-align:center"><i class="fas fa-tree" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i> <i class="fas fa-hiking" style="font-size: 16px"></i></p>')
    .closePopup();

var marker2 = L.marker([37.64, -7.66]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">PARQUE NATURAL DO VALE DO GUADIANA</p> <p style="text-align:center"><i class="fas fa-tree" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i> <i class="fas fa-hiking" style="font-size: 16px"></i></p>');

var marker3 = L.marker([38.57, -7.9]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">ÉVORA</p> <p style="text-align:center"><i class="fas fa-city" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-university" style="font-size: 16px"></i></p>');

var marker4 = L.marker([37.13, -7.65]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">TAVIRA</p> <p style="text-align:center"><i class="fas fa-city" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-university" style="font-size: 16px"></i></p>');

var marker5 = L.marker([37.65, -8.8]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">PRAIA DE ALMOGRAVE</p> <p style="text-align:center"><i class="fas fa-umbrella-beach" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i></p>');

var marker6 = L.marker([37.09, -8.41]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">PRAIA DA MARINHA</p> <p style="text-align:center"><i class="fas fa-umbrella-beach" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i></p>');

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