import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { googleMapsApiKey } from '../../constants';
import { MapMarker } from "../MapMarker";

const containerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: 52.4016543,
  lng: 4.8922197,
};

// TODO: add typing for launches
const Map = ({ launches }: any) => {
  // TODO: move key to the .env file
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {launches.map((launch: any) => (
        <MapMarker launch={launch} key={launch.id} />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export const MemoMap = React.memo(Map);
