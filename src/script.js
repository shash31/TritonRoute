// script.js
// Initialize the map centered on UCSD with a zoom level of 15
var map = L.map('map').setView([32.8801, -117.2340], 15); //returns map object

// Add OpenStreetMap tiles as the base layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
