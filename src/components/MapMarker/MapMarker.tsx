import React from "react";
import { Marker } from "@react-google-maps/api";

// TODO: add types for launch
export const MapMarker = ({ launch }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Marker
        key={launch.id}
        position={{
          lat: Number(launch.pad.latitude),
          lng: Number(launch.pad.longitude),
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen && (
          // TODO: add other launch params
          <div
            style={{ background: "white", zIndex: 10000, position: "absolute" }}
          >
            {launch.name}
          </div>
        )}
      </Marker>
    </>
  );
};
