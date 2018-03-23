import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import './map.css'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

var geojson = {
   "totems": [{
           "id": "a9b7b8320e6d794c9629be6615e769cb",
           "latitude": -33.42382,
           "longitude": -70.63992,
           "address": "Av. Peru 805, Santiago,  ",
           "name": "Av. Peru / Maestra Lidia Torres"
       },
       {
           "id": "a8c8d8215f3da59178f5524ccf2704f8",
           "latitude": -33.42251,
           "longitude": -70.64478,
           "address": "Recoleta 840, Recoleta, Santiago,  ",
           "name": "Cerro Blanco"
       },
       {
           "id": "2e6ee668edfac10b7b6b926b787109d7",
           "latitude": -33.42751,
           "longitude": -70.64655,
           "address": "Av Recoleta 404, Recoleta ,Santiago,  ",
           "name": "Clinica Dávila"
       },
       {
           "id": "fb51e02dd820f5cd4f1b8f135aaa2a82",
           "latitude": -33.43214,
           "longitude": -70.64846,
           "address": "Bellavista /Recoleta, Recoleta, Santiago,  ",
           "name": "Bellavista /Recoleta"
       },
       {
           "id": "75e495fb27717a74f61d54989211ff5d",
           "latitude": -33.42824,
           "longitude": -70.65338,
           "address": "Lastra 1089, Independencia, Santiago,  ",
           "name": "Av. Independencia  / General de la Lastra"
       }
   ]
};


class Slots extends Component {



  componentDidMount() {

    // Container to put React generated content in.

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-70.64212119999999, -33.4188987],
      zoom: 16
    });


 fetch('https://api.citybik.es/v2/networks/santiago')
  .then(data => data.json())
  .then(response => {
    response.network.stations.forEach(item => {
     var el = document.createElement('div');
    var h1 = document.createElement("h1");
    h1.textContent = item.empty_slots;
    el.appendChild(h1);
    el.className = 'marker';
    el.style.width = '20px';
    el.style.height = '20px';
    el.style.color = '#FF9A19';
    el.style.fontWeight = 'bolder';
    el.fontSize = '20px';



var popup = new mapboxgl.Popup()
    .setHTML('<div class="container">'+
      '<div class="row"><img src="../img/bikesantiago.jpg" alt=""></div>'+
      '<div class="row"><div><h3 class="address">' + item.extra.address + '</h3></div></div>'+
      '<div class="row"><div class="col-sm-1 col-xs-1"><i class="fas fa-bicycle"></i><p class="bici">' + item.free_bikes + ' Bici</p></div>'+
      '<div class="col-sm-1 col-xs-1"><i class="fas fa-bicycle"></i><p class="space">' + item.empty_slots + ' Libres</p></div>'+
      '<div class="col-sm-1 col-xs-1"><i class="fas fa-exclamation-circle"></i><p class="alert">Alerta</p></div></div></div>');

    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat([item.longitude,item.latitude])
        .setPopup(popup)
        .addTo(map);



    })
  })



  }

  render() {

    return (
      <div className="row">
        <div className="col-12">
          <div ref={el => this.mapContainer = el} className="map-height" />
        </div>
      </div>
    );
  }
}

export default Slots;