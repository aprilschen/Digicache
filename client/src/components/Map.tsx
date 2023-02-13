import { maxHeight } from '@mui/system';
import { GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import ExamplePhoto from '../assets/example.png';
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

const position = {
  lat: 35.69310784173771,
  lng: 139.70654253572886
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

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

    if (isLoading==true) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <>
        <p>This is the map function</p>
        {data.map(cache => <p>{cache.title}</p>)}
      </>
    );
  }

  export default Map