import React from "react";
import { FacebookSharp, Twitter, Instagram } from "@mui/icons-material";

const SmallSocials = (props) => {
	return (
		<div className="df__center--all">
			<span className="icon-social--small" data-tut={props.dataTutFB}>
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathFacebook}
					className="db line__height--0 text__decoration--none primary--hover"
				>
					<FacebookSharp
						sx={{
							color: "white",
							"&:hover": {
								color: "#f9ab30",
							},
						}}
					/>
				</a>
			</span>
			<span className="icon-social--small" data-tut={props.dataTutTT}>
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathTwitter}
					className="db line__height--0 text__decoration--none primary--hover"
				>
					<Twitter
						sx={{
							color: "white",
							"&:hover": {
								color: "#f9ab30",
							},
						}}
					/>
				</a>
			</span>
			<span className="icon-social--small" data-tut={props.dataTutIG}>
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathInstagram}
					className="db line__height--0 text__decoration--none primary--hover"
				>
					<Instagram
						sx={{
							color: "white",
							"&:hover": {
								color: "#f9ab30",
							},
						}}
					/>
				</a>
			</span>
		</div>
	);
};

export default SmallSocials;
