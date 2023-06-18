import { GoogleMap, InfoWindow, useJsApiLoader} from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useState } from 'react';


import { useQuery, gql } from '@apollo/client';

const get_caches = gql`

query GetCaches($amount: Int) {
  getCaches(amount: $amount) {
    createdAt
    description
    image
    latitude
    longitude
    tags
    thumbsUp
    thumbsDown
    title
  }
}

`;

const containerStyle = {
  width: '100%',
  height: '60vh'
};

const center = {
  lat: 35.69310784173771,
  lng: 139.70654253572886
};

const divStyle = {
  background: `white`,
  maxHeight: '150px',
  maxWidth: '150px'
}

function Map() {
  const { loading, error, data } = useQuery(get_caches);
  const [InfoWindowID, setInfoWindowID] = useState("");

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyACJwjUE7Z5Xju4G7LYuU865-M22090SjE"
})

  if (loading) return <p>Loading...</p>;
  if (!isLoaded) return <div>Loading...</div>;
  if (error) return <p>Error: {error.message}</p>;

    return (
      <>
       <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
        {
        data.getCaches.map(cache => 
          <Marker 
          position= {{
            lat: parseFloat(cache.latitude),
            lng: parseFloat(cache.longitude)
          }}
          key={cache.title}
          icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
          onClick={() => {
            setInfoWindowID(cache.title);
          }}
          >
            {InfoWindowID === cache.title ? 
                      <InfoWindow
                      position={{
                        lat: parseFloat(cache.latitude),
                        lng: parseFloat(cache.longitude)
                      }}
                      onCloseClick={() => setInfoWindowID("")}
                    >
                      <div style={divStyle} key={cache.id}>
                        <img style={{height: '100px', width: '100px'}} 
                        src={cache.image}>
                          </img>
                        <hr />
                        <h3>{cache.title}</h3>
                        <p>{cache.description}</p>
                        <p>Date: {cache.createdAt}</p>
                        <p>Tags: {cache.tags}</p>
                        <p>Thumbs up: {cache.thumbsUp}</p>
                        <p>Thumbs up: {cache.thumbsDown}</p>
                      </div>
                    </InfoWindow>: <></>}
          </Marker>
          )
          }

        </GoogleMap>
      </>
    );
  }

  export default Map