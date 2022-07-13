import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './App.css';
import getBounds from './utils/getBounds';

const Map = ({articleData}) => (
  <div className='Map-container'>
    <MapContainer style={{height: '400px'}} bounds={getBounds(articleData)} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
          articleData.map((article) => (
            <Marker position={[article.location.latitude, article.location.longitude]}>
            </Marker>
          ))
      }
    </MapContainer>
  </div>
);

export default Map;