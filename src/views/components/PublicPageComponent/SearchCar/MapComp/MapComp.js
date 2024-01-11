import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";

const mapContainerStyle = {
  height: "650px",
  width: "100%",
};

const carLocation = [
  {
    lat: 23.7619353,
    lng: 90.43314099999999,
  },
  {
    lat: 23.7641281,
    lng: 90.44669909999999,
  },
  {
    lat: 37.832,
    lng: -122.424,
  },
];

const MapComp = ({ hoverSelectedCar }) => {

  // console.log("hoverSelectedCar", hoverSelectedCar);
  const [map, setMap] = useState(/** @type google.maps.Map */(null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  console.log("hoverSelectedCar from map comp", hoverSelectedCar)
  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const {
    user,
    isLoading,
    setIsLoading,
    rentCarData,
    setRentCarData,
    setSearchCarData,
    searchCarData,
    filterCarList
  } = useAuth();
  const pickupLocation = {
    lat: rentCarData?.pickupAddress?.lat,
    lng: rentCarData?.pickupAddress?.lng,
  };
  pickupLocation.lat = pickupLocation.lat || 23.810332;
  pickupLocation.lng = pickupLocation.lng || 90.4125181;
  console.log("pickupLocation ", pickupLocation);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAr-O3yxzD09LfY0lgkDsoAVKH_wTDamiY",
  });

  const onLoad = (marker) => {
    // console.log("marker: ", marker);
  };


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  async function calculateRoute() {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: pickupLocation,
      destination: carLocation[0],
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    // setDistance(results.routes[0].legs[0].distance.text)
    // setDuration(results.routes[0].legs[0].duration.text)
  }
  return isLoaded ? (
    <>
      {/* <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
        Calculate Route
      </Button> */}
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={pickupLocation}
      >
        <Marker
          icon={
            "https://img.icons8.com/external-others-iconmarket/64/000000/external-marker-user-interface-others-iconmarket.png"
          }
          position={pickupLocation}
        />
        {
          filterCarList && hoverSelectedCar?.lat && <Marker
            icon={{

              url: 'https://img.icons8.com/color/48/000000/car--v1.png',



            }}
            // eslint-disable-next-line no-undef
            animation={google.maps.Animation.BOUNCE}
            position={{ lat: hoverSelectedCar.lat, lng: hoverSelectedCar.lng }}

          />
        }


        {/* <Marker
          icon={{
            path:
            'M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z',
            fillColor: '#0000ff',
            fillOpacity: 1.0,
            strokeWeight: 0,
            scale: 1.5
          }} 
          position={pickupLocation}
        /> */}
        {filterCarList &&
          filterCarList.map(function (object, i) {
            // const {lat, lng} = object.picpickupAddress;
            const lat = object.pickupAddress.lat;
            const lng = object.pickupAddress.lng;
            return (
              <Marker
                icon={"https://img.icons8.com/color/48/000000/car--v1.png"}
                position={{ lat, lng }}
              />
            );
          })}
        {/* <Marker
                    icon={'https://img.icons8.com/color/48/000000/car--v1.png'}
                    position={carLocation[0]}
                /> */}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              suppressMarkers: true,
              polylineOptions: {
                strokeOpacity: 1.0,
                strokeColor: "#F36629",
                strokeWeight: 6,
              },
            }}
          />
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default MapComp;
