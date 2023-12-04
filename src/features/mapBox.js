import mapboxgl, { LngLatBounds } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);
mapboxgl.accessToken =
  'pk.eyJ1IjoidGhhb3R0cCIsImEiOiJjbHBvYTVqM2owb2N4MmpwZ2xnb3dkamxjIn0.rD97_rQRAQqWCJ_qfu-3aQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/thaottp/clpog38f7011701o9f28o4vfj', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
const bounds = new mapboxgl.LngLatBounds();
//Add markup
locations.forEach((loc) => {
  const el = document.createElement('div');
  el.className = 'marker';
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);
  //Add popup
  new mapboxgl.Popup().setLngLat(loc.coordinates).setHTML('div');
  bounds.extend(loc.coordinates);
});
map.fitBounds(bounds);
