const token =
  'pk.eyJ1IjoiaWRjYXJnaWxsIiwiYSI6ImNrcmh1MGY3bTBvaHgydm80ejhkcjVoMjEifQ.Kzjr5NN2uxIGUBGzgMteLg';
// Map loads into DOM id (needs height)

// TOM TOM maps ===========================
// const TomTomKey = 'IjxwJ8TC19Gx6u8RFl43vWzIHfRBAAML';
// const tileSize = 256;
// const versionNumber = 1;
// const layer = 'basic';
// const style = 'main';
// const zoom = 0;
// const x = 0;
// const y = 0;
// const format = 'png';
// const view = 'Unified';
// const language =

// const tomUrl = `https://baseURL/map/${versionNumber}/tile/${layer}/${style}/${zoom}/${x}/${y}.${format}?key=${TomTomKey}&tileSize=${tileSize}`;
// const tomUrl =
//   'https://baseURL/map/1/tile/basic/main/0/0/0.png?key=IjxwJ8TC19Gx6u8RFl43vWzIHfRBAAML&tileSize=256';
// ==========================================

const myMap = L.map('leafletmap').setView([50, 27], 5);

const mapOptions = {
  preferCanvas: false,
  attributionControl: true,
  closePopupOnClick: true,
  zoomSnap: 1,
  zoomDelta: 1,
  trackResize: true,
  doubleClickZoom: true,
  dragging: true,
};

const mapStateOptions = {};

// ICONS ====================
// PNG art
{
  /* <a href="https://www.freeiconspng.com/img/39474">Best Png Clipart Pin</a> */
}

const PinIcon = L.Icon.extend({
  options: {
    iconUrl: './pin.png',
    iconSize: [20, 20],
    shadowSize: [100, 50],
    iconAnchor: null,
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

const redPin = new PinIcon();
// -=============================

// Tile Layer
// L.tileLayer(
//   'https://api.tomtom.com/map/1/tile/basic/main/1/0/0.png?key=IjxwJ8TC19Gx6u8RFl43vWzIHfRBAAML&tileSize=256'
// ).addTo(myMap);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: token,
  }
).addTo(myMap);

// Popup options
const popTions = {
  maxWidth: 100,
  minWidth: 50,
  maxHeight: 50,
  autoPan: true,
  // autoPanPaddingTopLeft: 4,
  autoPanPadding: (4, 4),
  keepInView: false,
  closeButton: true,
  autoClose: true,
  className: 'favorites',
};
// Markers
const m1 = L.marker([50.5, 30.5], { icon: redPin });
const m2 = L.marker([50, 20.5], { icon: redPin });
const m3 = L.marker([49, 21], { icon: redPin });

m1.bindPopup('Favorite 1');

const favorites = L.featureGroup([m1, m2, m3]);

// favorites.addTo(myMap);
// favorites.remove(myMap);

//  Second Map instance Map 2
const map2 = L.map('leafletmap2').setView([50, 25], 5);

// Tile Layer
const europe = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution: 'THIS IS A MAP!',
    mapZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: token,
  }
).addTo(map2);

favorites.addTo(map2);

// Map Even Listener
function showLocation(ev) {
  let clickPop = L.popup();
  clickPop.setLatLng(ev.latlng).setContent(ev.latlng.toString()).openOn(myMap);
  console.log(`${ev.latlng.lat}, ${ev.latlng.lng}`);
}

myMap.on('click', showLocation);

console.log('hi');

const world = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution: 'The World!',
    mapZoom: 1,
    id: 'World View',
    tileSize: 512,
    zoomOffSet: -1,
    accessToken: token,
  }
).addTo(map2);

const overlayMaps = {
  favorite_spots: favorites,
};

const baseMaps = {
  world: world,
  // europe: europe,
};

L.control.layers(baseMaps, overlayMaps).addTo(map2);
