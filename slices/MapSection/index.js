import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';
import { RichText } from 'prismic-reactjs';

export default function MySlice({ slice }) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiMnNpY2lseSIsImEiOiJja3E3bXZ0aDIwN2tvMzJtdng5bmlwcDFrIn0.W1VR5KzTiCYn7Yn1NQ7s4g';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(slice.primary.location.longitude);
  const [lat, setLat] = useState(slice.primary.location.latitude);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    var nav = new mapboxgl.NavigationControl();

    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    }).addControl(nav, 'top-left')
    var marker = new mapboxgl.Marker({color: "#4458BE",})
    .setLngLat([slice.primary.location.longitude, slice.primary.location.latitude])
    .addTo(map.current);
    });

  return (
    <section className="mb-8">
      <div className="w-screen max-w-5xl mx-auto p-4">
      <div className="font-light text-xl mb-4">{slice.primary.heading}</div>
      <div ref={mapContainer} className="w-full h-96">
      </div>
      </div>
    </section>
  )
}

