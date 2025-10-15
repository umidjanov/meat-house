var map = L.map("map").setView([41.32354686281098, 69.16322326283897], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([41.32354686281098, 69.16322326283897])
  .addTo(map)
  .bindPopup("Islom qassob go'sht do'koni.")
  .openPopup();
