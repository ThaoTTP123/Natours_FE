import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoidGhhb3R0cCIsImEiOiJjbHBvYTVqM2owb2N4MmpwZ2xnb3dkamxjIn0.rD97_rQRAQqWCJ_qfu-3aQ';
const TourMap = ({ locations }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: 'mapbox://styles/thaottp/clpog38f7011701o9f28o4vfj', // style URL
      scrollZoom: false,
      //   center: [-74.5, 40], // starting position [lng, lat]
      //   zoom: 9, // starting zoom
    });
    const bounds = new mapboxgl.LngLatBounds();
    //Add markup

    map.current.on('move', () => {
      locations.forEach((loc) => {
        const el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker({}).setLngLat(loc.coordinates).addTo(map.current);
        //Add popup
        new mapboxgl.Popup({ offset: 30 })
          .setLngLat(loc.coordinates)
          .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
          .addTo(map.current);
        bounds.extend(loc.coordinates);
      });
      map.current.fitBounds(bounds, {
        padding: {
          top: 300,
          bottom: 200,
          left: 100,
          right: 100,
        },
      });
    });
    // Clean up the map when the component unmounts
  }, [locations]); // Run this effect only once on mount

  return (
    <div style={{ width: '100%', position: 'absolute', top: 0, bottom: 0 }}>
      {/* Conditionally render content based on map initialization */}
      {map ? (
        <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default TourMap;
