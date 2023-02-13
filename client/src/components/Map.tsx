import { GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import Alley from '../../../server/media/images/example.png';
import Lake from '../../../server/media/images/XYZeXYZe6736_375.jpeg'
import axios from 'axios';
import { useEffect, useState } from 'react';

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
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyACJwjUE7Z5Xju4G7LYuU865-M22090SjE"
    })
    const URL = "http://127.0.0.1:8000/api/caches";
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [InfoWindowID, setInfoWindowID] = useState("");

    useEffect(() => {
    (async () => {
        try {
          const response = await axios.get(URL)
            .then((res) => {
              setData(res.data.data)
            })
        } catch(error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
    }, []);

    if ((isLoading==true) || isLoaded==false) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <>
       <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >

        {data.map(cache => 
          <Marker 
          position= {{
            lat: parseFloat(cache.latitude),
            lng: parseFloat(cache.longitude)
          }}
          key={cache.id}
          icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
          onClick={() => {
            setInfoWindowID(cache.id);
          }}
          >
            {InfoWindowID === cache.id ? 
                      <InfoWindow
                      position={{
                        lat: parseFloat(cache.latitude),
                        lng: parseFloat(cache.longitude)
                      }}
                    >
                      <div style={divStyle} key={cache.id}>
                        <img style={{height: '100px', width: '100px'}} 
                        src={Alley}>
                          </img>   {/* perhaps I should append a string to the cache.image file and then test it out. Maybe I can't concatenate mid-String */}
                        <hr />
                        <h3>{cache.title}</h3>
                        <p>{cache.description}</p>
                      </div>
                    </InfoWindow>: <></>}
          </Marker>
          )}

        </GoogleMap>
      </>
    );
  }

  export default Map