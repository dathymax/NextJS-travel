import React from "react";
import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";

const LargeSocials = (props) => {
	return (
		<div className="margin__t--20 df__center--align">
			<div className="margin__r--20 border__rds--50pc">
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathFacebook}
					className="db line__height--0 text__decoration--none"
				>
					<FacebookRounded sx={props.sx} />
				</a>
			</div>
			<div className="margin__r--20 border__rds--50pc">
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathInstagram}
					className="db line__height--0 text__decoration--none"
				>
					<Instagram sx={props.sx} />
				</a>
			</div>
			<div className="margin__r--20 border__rds--50pc">
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathTwitter}
					className="db line__height--0 text__decoration--none"
				>
					<Twitter sx={props.sx} />
				</a>
			</div>
		</div>
	);
};

export default LargeSocials;
