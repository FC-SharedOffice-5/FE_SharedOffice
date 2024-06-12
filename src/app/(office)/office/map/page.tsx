'use client';

import { useState, useEffect } from 'react';
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { locations } from '../constants';

type MarkersProps = {
  locations: {
    id: number;
    location: {
      lat: number;
      lng: number;
    };
  }[];
};

const Markers = ({ locations }: MarkersProps) => {
  return (
    <>
      {locations.map((location) => (
        <AdvancedMarker
          key={location.id}
          position={location.location}
        />
      ))}
    </>
  );
};

export default function GoogleMap() {
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error fetching location:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Map
        defaultZoom={18}
        defaultCenter={currentPosition || { lat: -33.860664, lng: 151.208138 }}
        mapId="a929018e38093d4e"
      >
        <Markers locations={locations} />
        {currentPosition && <AdvancedMarker position={currentPosition} />}
      </Map>
    </APIProvider>
  );
}
