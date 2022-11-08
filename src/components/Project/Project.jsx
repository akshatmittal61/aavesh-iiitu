import React from "react";
import { GitHub, Link } from "react-feather";
import "./project.scss";

const Project = ({ image, title, description, github, link }) => {
	return (
		<div
			className="project"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className="project-title">{title}</div>
			{description && (
				<div className="project-description">{description}</div>
			)}
			{(github || link) && (
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
			)}
		</div>
	);
};

export default Project;
