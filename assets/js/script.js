// Initialize the platform object:
var platform = new H.service.Platform({
    'apikey': '{ZnbZ0scDwJdbGGL2vIJEJCI-RGcAXOPWeV6V_E3kuq0}'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('map'),
    maptypes.vector.normal.map,
    {
        zoom: 7,
        center: { lng: -7.91, lat: 40.66 }
    });