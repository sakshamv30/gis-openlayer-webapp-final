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
 ;

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























