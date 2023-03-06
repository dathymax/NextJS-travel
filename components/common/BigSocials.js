import React from "react";
import { FacebookSharp, Google, LinkedIn } from "@mui/icons-material";

const BigSocials = (props) => {
	return (
		<div className="margin__t--20 df__center--all">
			<div className="icon-social--big margin__lr--10 padding--5 border__all--2--black border__rds--50pc">
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathFacebook}
					className="db line__height--0 text__decoration--none"
				>
					<FacebookSharp sx={props.sx} />
				</a>
			</div>
			<div className="icon-social--big margin__lr--10 padding--5 border__all--2--black border__rds--50pc">
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathGoogle}
					className="db line__height--0 text__decoration--none"
				>
					<Google sx={props.sx} />
				</a>
			</div>
			<div className="icon-social--big margin__lr--10 padding--5 border__all--2--black border__rds--50pc">
				<a
					rel="noreferrer"
					target="_blank"
					href={props.pathLinkedIn}
					className="db line__height--0 text__decoration--none"
				>
					<LinkedIn sx={props.sx} />
				</a>
			</div>
		</div>
	);
};

export default BigSocials;
