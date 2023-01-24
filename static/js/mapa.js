

var map = L.map('map').setView([-11.97, -77.11], 8)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);


// Agregar mapa base al plugin MiniMap 
var carto_light = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Agregar plugin Minimap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

    // Agregar escala
new L.control.scale({imperial:false}).addTo(map);

// Configurar PopUp
function popup(feature, layer){
    if (feature.properties && feature.properties.ID){
        layer.bindPopup("<strong>Nombre: </strong>" + feature.properties.ID + "<br/>" + "<strong>Categoria: </strong>" + feature.properties.CATEGORIA)
    }       
}


const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});



// Agregar capa en formato GeoJson
//L.geoJson(redvial).addTo(map)
//L.geoJson(aerod).addTo(map)
//L.geoJson(portuario).addTo(map)
//L.geoJson(rio).addTo(map)/
//L.geoJson(casco_urbano)
//L.geoJson(comisarias).addTo(map)
L.geoJson(areas).addTo(map)
//L.polygon(areas).addTo(map)

//var riosJS = L.geoJson(rios,{
//    onEachFeature: popup 
//}).addTo(map);

