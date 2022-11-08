import React, { useState } from "react";
import { getIcon, getLink } from "../../utils";
import userFallback from "../../images/user.svg";
import _ from "lodash";
import "./card.scss";

const Card = ({
	image,
	name,
	title,
	status,
	socials,
	color = "light-blue",
}) => {
	const [userImage, setUserImage] = useState(image);
	return (
		<div
			className="card"
			style={{ backgroundColor: `var(--${color}-100)` }}
		>
			<div className="card-image">
				<img
					src={userImage}
					onError={() => setUserImage(userFallback)}
					alt={name}
					loading="lazy"
				/>
			</div>
			<div className="card-content">
				<div className="card-name">{name}</div>
				<div className="card-title">{title}</div>
				<div className="card-status">{status}</div>
				<div className="card-socials">
					{socials?.map(
						(social, id) =>
							social.username && (
								<a
									href={getLink(
										social.service,
										social.username
									)}
									title={`${social.service}/${social.username}`}
									key={id}
									target="_blank"
									rel="noreferrer"
									className={`card-social ${_.lowerCase(
										social.service
									)}`}
								>
									{getIcon(social.service)}
								</a>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
