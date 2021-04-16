import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  const position = [-25.0798227,-50.1523773];
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="happy"/>

          <h2>Escolha um orfanato do mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Ponta Grossa</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <MapContainer 
        center={[ -25.0798227,-50.1523773 ]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;