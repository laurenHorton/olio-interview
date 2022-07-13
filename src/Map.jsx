import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import getBounds from './utils/getBounds';

const Map = ({articleData}) => (
  <div className='Map-container'>
    <MapContainer className='Map' bounds={getBounds(articleData)} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
          articleData.map((article) => (
            <Marker
              key={article.id}
              position={[article.location.latitude, article.location.longitude]}
            >
              <Popup>
                {article.title} <a href={`/article/${article.id}`}  target="_blank" rel="noreferrer">view details</a>
              </Popup>
            </Marker>
          ))
      }
    </MapContainer>
  </div>
);

export default Map;