import React from "react";
import Project from "../../components/Project/Project";
import Row, { Col } from "../../Layout/Responsive";
import achievements from "../../utils/achievements";
import projects from "../../utils/projects";
import "./wall.css";

const Wall = () => {
	return (
		<main className="wall">
			<section className="wall-projects">
				<div className="wall-projects-head">
					<h1>Projects</h1>
				</div>
				<div className="wall-projects-body">
					<Row>
						{projects.map((project, id) => (
							<Col lg={33} md={50} sm={100} key={id}>
								<Project {...project} />
							</Col>
						))}
					</Row>
				</div>
			</section>
			<section className="wall-achievements">
				<div className="wall-achievements-head">
					<h1>Achievements</h1>
				</div>
				<div className="wall-achievements-body">
					<table>
						<thead>
							<tr>
								<th>Student</th>
								<th>Competition</th>
								<th>Details</th>
								<th>Achievement</th>
							</tr>
						</thead>
						<tbody>
							{achievements.map((achievement) => (
								<tr>
									<td>{achievement.student}</td>
									<td>{achievement.competition}</td>
									<td>{achievement.details}</td>
									<td>{achievement.achievement}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</main>
	);
};

export default Wall;
