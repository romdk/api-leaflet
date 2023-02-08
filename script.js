let map = L.map('map').setView([48.583328, 7.75], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markers = L.markerClusterGroup({animate: true});
L.DomUtil.TRANSITION  = true;
markers.addLayer(L.marker([48.801330, 7.773538]).bindPopup("<b>Elan Formation</b><br>32 Av. du Professeur René Leriche, 67500 Haguenau"));
markers.addLayer(L.marker([48.743870, 7.368060]).bindPopup("<b>Elan Formation</b><br>12 Rue du Zornhoff, 67700 Saverne"));
markers.addLayer(L.marker([48.075177, 7.344572]).bindPopup("<b>Elan Formation</b><br>3 Pl. du Capitaine Dreyfus, 68000 Colmar"));
markers.addLayer(L.marker([48.259673, 7.455360]).bindPopup("<b>Elan Formation</b><br>46 Rue des Chevaliers, 67600 Sélestat"));
markers.addLayer(L.marker([47.744309,7.2936725]).bindPopup("<b>Elan Formation</b><br>130 Rue de la Mer Rouge, 68200 Mulhouse"));
markers.addLayer(L.marker([49.105747, 6.222625]).bindPopup("<b>Elan Formation</b><br>1 Rue Graham Bell, 57070 Metz"));

map.addLayer(markers);  
