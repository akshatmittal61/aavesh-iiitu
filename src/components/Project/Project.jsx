import React from "react";
import { GitHub, Link } from "react-feather";
import "./project.css";

const Project = ({ image, title, github, link }) => {
	return (
		<div
			className="project"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className="project-title">{title}</div>
			<div className="project-links">
				{github && (
					<a href={github} target="_blank" rel="noreferrer">
						<GitHub />
					</a>
				)}
				{link && (
					<a href={link} target="_blank" rel="noreferrer">
						<Link />
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
