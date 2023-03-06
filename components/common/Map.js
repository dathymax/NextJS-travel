import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
	return (
		// Important! Always set the container height explicitly
		<div style={{ height: "600px", width: "100%" }}>
			<GoogleMapReact
				defaultZoom={8}
				defaultCenter={{ lat: -34.397, lng: 150.644 }}
			>
				<AnyReactComponent
					lat={59.955413}
					lng={30.337844}
					text="My Marker"
				/>
			</GoogleMapReact>
		</div>
	);
};

export default Map;
