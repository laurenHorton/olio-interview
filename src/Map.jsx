import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './App.css';

const getBounds = (articleData) => {
  let lowestLat = articleData[0].location.latitude;
  let highestLat = articleData[0].location.latitude;
  let lowestLong = articleData[0].location.longitude;
  let highestLong =  articleData[0].location.longitude;
  articleData.forEach((article) => {
    const { latitude, longitude } = article.location;
    if( latitude < lowestLat) lowestLat = latitude;
    if( latitude > highestLat) highestLat = latitude;
    if( longitude < lowestLong) lowestLong = longitude;
    if( longitude > highestLong) highestLong = longitude;
  });

  return [
    [lowestLat, lowestLong],
    [highestLat, highestLong]
  ]
}

const Map = ({articleData}) => (
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
);

export default Map;