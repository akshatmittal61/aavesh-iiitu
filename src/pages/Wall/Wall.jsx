import React from "react";
import achievements from "../../utils/achievements";
import "./wall.css";

const Wall = () => {
	return (
		<main className="wall">
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
