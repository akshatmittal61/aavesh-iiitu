import React from "react";
import Button from "../Button/Button";
import "./event.scss";

const Event = ({ title, image, about, link }) => {
	return (
		<div className="event">
			<div className="event-left">
				<span className="event-title">{title}</span>
				<div className="event-image">
					<img src={image} alt={title} />
				</div>
			</div>
			<div className="event-right">
				<p className="event-about">{about}</p>
				{link && (
					<Button
						text="Know More"
						href={link}
						size="small"
						icon="arrow_forward"
					/>
				)}
			</div>
		</div>
	);
};

export default Event;
