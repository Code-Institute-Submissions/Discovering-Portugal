// MAP - code written according to Leaflet documentation 

var mymap = L.map('map').setView([39.32, -8.09], 8);

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

var marker1 = L.marker([39.49, -8.76]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">SERRA DE AIRE E CANDEEIROS NATURAL PARK</p> <p style="text-align:center"><i class="fas fa-tree" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i> <i class="fas fa-hiking" style="font-size: 16px"></i></p>')
    .closePopup();

var marker2 = L.marker([38.49, -8.99]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">ARRÁBIDA NATURAL PARK</p> <p style="text-align:center"><i class="fas fa-tree" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i> <i class="fas fa-hiking" style="font-size: 16px"></i></p>');

var marker3 = L.marker([38.71, -9.14]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">LISBON</p> <p style="text-align:center"><i class="fas fa-city" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-university" style="font-size: 16px"></i></p>');

var marker4 = L.marker([38.8, -9.38]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">SINTRA</p> <p style="text-align:center"><i class="fas fa-city" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-university" style="font-size: 16px"></i></p>');

var marker5 = L.marker([39.6, -8.41]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">TOMAR</p> <p style="text-align:center"><i class="fas fa-city" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-university" style="font-size: 16px"></i></p>');

var marker6 = L.marker([39.6, -9.07]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">NAZARÉ BEACH</p> <p style="text-align:center"><i class="fas fa-umbrella-beach" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i></p>');
    
var marker7 = L.marker([38.44, -9.1]).addTo(mymap)
    .bindPopup('<p style="text-align: center; font-size: 14px">SESIMBRA BEACH</p> <p style="text-align:center"><i class="fas fa-umbrella-beach" style="font-size: 16px"></i> <i class="fas fa-bed" style="font-size: 16px"></i> <i class="fas fa-campground" style="font-size: 16px"></i> <i class="fas fa-utensils" style="font-size: 16px"></i> <i class="fas fa-swimmer" style="font-size: 16px"></i></p>');

// BUTTONS

$(document).ready(function(){
    $("#map-btn1").click(function(){
        $("#place1").removeClass('hidden');
        $("#place2").removeClass('hidden');
        $("#place3").addClass('hidden');
        $("#place7").addClass('hidden');  //place7 was put out of order on purpose, this way it is together with places 3 and 4 that have the same turism type as this one and is in the same order of appearance as the html code
        $("#place4").addClass('hidden');
        $("#place5").addClass('hidden');
        $("#place6").addClass('hidden');
        marker1.addTo(mymap);
        marker2.addTo(mymap);
        marker3.removeFrom(mymap);
        marker4.removeFrom(mymap);
        marker5.removeFrom(mymap);
        marker6.removeFrom(mymap);
        marker7.removeFrom(mymap);
    });
    $("#map-btn2").click(function(){
        $("#place1").addClass('hidden');
        $("#place2").addClass('hidden');
        $("#place3").removeClass('hidden');
        $("#place7").removeClass('hidden');  //place7 was put out of order on purpose, this way it is together with places 3 and 4 that have the same turism type as this one and is in the same order of appearance as the html code
        $("#place4").removeClass('hidden');
        $("#place5").addClass('hidden');
        $("#place6").addClass('hidden');
        marker1.removeFrom(mymap);
        marker2.removeFrom(mymap);
        marker3.addTo(mymap);
        marker4.addTo(mymap);
        marker5.removeFrom(mymap);
        marker6.removeFrom(mymap);
        marker7.removeFrom(mymap);
    });
    $("#map-btn3").click(function(){
        $("#place1").addClass('hidden');
        $("#place2").addClass('hidden');
        $("#place3").addClass('hidden');
        $("#place7").addClass('hidden'); //place7 was put out of order on purpose, this way it is together with places 3 and 4 that have the same turism type as this one and is in the same order of appearance as the html code
        $("#place4").addClass('hidden');
        $("#place5").removeClass('hidden');
        $("#place6").removeClass('hidden');
        marker1.removeFrom(mymap);
        marker2.removeFrom(mymap);
        marker3.removeFrom(mymap);
        marker4.removeFrom(mymap);
        marker5.removeFrom(mymap);
        marker6.addTo(mymap);
        marker7.addTo(mymap);
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