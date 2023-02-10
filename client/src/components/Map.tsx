import { maxHeight } from '@mui/system';
import { GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import ExamplePhoto from '../assets/example.png'

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

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >

        <Marker
        onLoad={onLoad}
        position={position}
        icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
        />

          <InfoWindow
          position={{
            lat: 35.69750784173771,
            lng: 139.70654253572886
          }}
        >
          <div style={divStyle}>
            <img style={{height: '100px', width: '100px'}} src={ExamplePhoto}></img>
            <hr />
            <h3>Cool Alleyway!</h3>
            <p>Found this cool alleway in the middle of Shinjuku.</p>
          </div>
        </InfoWindow>

        </GoogleMap>
    ) : <></>
  }

  export default Map