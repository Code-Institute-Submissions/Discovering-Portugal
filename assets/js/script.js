// MAP - code written according to OpenLayers documentation

var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-7.91, 40.66]),
          zoom: 7
        })
      });

//  MARKERS - code written with the help of https://medium.com/attentive-ai/working-with-openlayers-4-part-2-using-markers-or-points-on-the-map-f8e9b5cae098

var markerA = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-8.08,41.42])
    ),
});

var markerB = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-7.36,40.19])
    ),
});

var markerC = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-8.61,41.15])
    ),
});

var markerD = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-8.65,40.64])
    ),
});

var markerE = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-8.00,39.30])
    ),
});

var markerF = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-8.80,41.5])
    ),
});

var vectorSource = new ol.source.Vector({
    features: [markerA, markerB, markerC, markerD, markerE, markerF]
});

var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});
map.addLayer(markerVectorLayer);
