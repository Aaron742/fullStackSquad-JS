let map = L.map("map").setView([43.569501, 1.402216], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([43.569501, 1.402216]).addTo(map);

let popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("YOUR MOM IS HERE " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);
