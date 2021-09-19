import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";
const Map = ({ searchInfo }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const latLong = searchInfo.map((info) => ({
    latitude: parseInt(info.lat),
    longitude: parseInt(info.long),
  }));

  const center = getCenter(latLong);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 5,
  });
  return (
    <ReactMapGL
      width='100%'
      height='100%'
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle={"mapbox://styles/rahman671/cktqxcx3r3mfq18kkt819b9ls"}
      mapboxApiAccessToken={process.env.mapboxApiAccessToken}
      {...viewport}
    >
      {searchInfo.map((mark) => (
        <div>
          <Marker
            latitude={parseInt(mark.lat)}
            longitude={parseInt(mark.long)}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              onClick={() =>
                setSelectedLocation({
                  lat: parseInt(mark.lat),
                  long: parseInt(mark.long),
                })
              }
              className='h-6 text-red-400 cursor-pointer animate-bounce'
            />
          </Marker>
          {selectedLocation.long === parseInt(mark.long) ? (
            <Popup
              latitude={parseInt(mark.lat)}
              longitude={parseInt(mark.long)}
              onClose={() => setSelectedLocation({})}
            >
              <p>{mark.title}</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
