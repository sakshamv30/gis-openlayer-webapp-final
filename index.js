import 'ol/ol.css';
import Draw from 'ol/interaction/Draw';
import Map from 'ol/Map';
import View from 'ol/View';
import {OSM, Vector as VectorSource, Tile} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
// import OLCesium from 'olcs/OLCesium.js';




var raster = new TileLayer({
  source: new OSM(),
});

var source = new VectorSource({wrapX: false});

var vector = new VectorLayer({
  source: source,
});
var map = new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: ol.proj.fromLonLat([77.1025, 28.7041]),
    rotation: Math.PI / 10,
    zoom: 8
  }),
});
// point with altitude
var point = new maptalks.Marker(
  [77.1025, 28.7041],
  {
    properties : {
      altitude : 400
    }
  }
);

// // same point without altitude
var point0 = new maptalks.Marker(
  [77.1025, 28.7041]
).updateSymbol({
  markerOpacity : 0.5,
  markerFill : '#bbb'
});
var p=1;
const button = document.querySelector('.threed');
button.addEventListener('click',()=>{
  p=3-p;
  if(p=2)
  { 
    map = new maptalks.Map('map', {
      center: [77.1025,28.7041],
      zoom: 14,
      pitch : 56,
      baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a','b','c','d'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });
    new maptalks.VectorLayer('vector', [point0, point], {
    enableAltitude : true,        // enable altitude
    altitudeProperty : 'altitude' // altitude property in properties, default by 'altitude'
  }).addTo(map);
  }
  else{
    map = new Map({
      layers: [raster, vector],
      target: 'map',
      view: new View({
        center: ol.proj.fromLonLat([77.1025, 28.7041]),
        rotation: Math.PI / 10,
        zoom: 8
      }),
    });
  }
})


var typeSelect = document.getElementById('type');

var draw; // global so we can remove it later
function addInteraction() {
  var value = typeSelect.value;
  if (value !== 'None') {
    draw = new Draw({
      source: source,
      type: typeSelect.value,
    });
    map.addInteraction(draw);
  }
}

/**
 * Handle change event.
 */
typeSelect.onchange = function () {
  map.removeInteraction(draw);
  addInteraction();
};

addInteraction();


// var ol3d = olcs.OLCesium(map); // map is the ol.Map instance
// ol3d.setEnabled(true)



// var map = new maptalks.Map('map', {
//   center: [-0.113049, 51.498568],
//   zoom: 14,
//   pitch : 56,
//   baseLayer: new maptalks.TileLayer('base', {
//     urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
//     subdomains: ['a','b','c','d'],
//     attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
//   })
// });























