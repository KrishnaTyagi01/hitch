import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

function Map(){
	return(
		<GoogleMap defaultZoom={10} defaultCenter={{lat:28.638570, lng:77.365680}} />
	)
}
// ${process.env.REACT_APP_GOOGLE_KEY}
console.log(process.env.REACT_APP_GOOGLE_KEY)
const WrappedMap = withScriptjs(withGoogleMap(Map)) 


const MapSection = () =>{
	return(
		<div style={{width:"100vw", height:"100vh"}} className="map">
			<WrappedMap
			 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}

			 loadingElement = {<div style={{height: "100%"}}/>}
			 containerElement = {<div style={{height: "100%"}}/>}
			 mapElement = {<div style={{height: "100%"}}/>}
			
			/>
		</div>
	)
}

export default MapSection;