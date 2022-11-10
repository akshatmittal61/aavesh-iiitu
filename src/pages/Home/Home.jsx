import React, { useState } from "react";
import { Instagram, Linkedin, Mail } from "react-feather";
import { circuitBg } from "../../images";
import Row, { Col } from "../../Layout/Responsive";
import { cooridnators, officeBearers } from "../../utils/team";
import {
	backwardArrow,
	forwardArrow,
	gmail,
	instagram,
	linkedin,
	sideLogo,
	teamwork,
} from "../../vectors";
import "./home.scss";

const Home = () => {
	const vh = window.innerHeight * 0.01;
	const [heroText, setHeroText] = useState("Electronics");
	const [socialHighlight, setSocialHighlight] = useState(3);
	const socials = [
		{
			link: "https://www.instagram.com/teamaavesh/",
			icon: <Instagram />,
			image: instagram,
			text: "Instagram",
			username: "teamaavesh",
			linkText: "instagram.com/teamaavesh",
		},
		{
			link: "https://www.linkedin.com/company/aavesh-iiitu/",
			icon: <Linkedin />,
			image: linkedin,
			text: "LinkedIn",
			username: "aavesh-iiitu",
			linkText: "linkedin.com/company/aavesh-iiitu",
		},
		{
			link: "mailto:aavesh@iiitu.ac.in",
			icon: <Mail />,
			image: gmail,
			text: "Email",
			username: "aavesh@iiitu.ac.in",
			linkText: "aavesh@iiitu.ac.in",
		},
	];
	return (
		<main
			className="home"
			style={{
				backgroundImage: `url(${circuitBg})`,
			}}
		>
			<section className="home-hero">
				<div className="home-hero-content">
					<span>Learn {heroText}</span>
					<span>and create</span>
				</div>
				<div className="home-hero-socials">
					<span className="home-hero-socials__head">
						Check Us out on
					</span>
					<div className="home-hero-socials__body">
						<span onClick={() => setSocialHighlight((p) => p - 1)}>
							<img src={backwardArrow} alt="Backward Arrow" />
						</span>
						{Array(3)
							.fill(null)
							.map((_, i) => (
								<a
									href={
										socials[
											(Math.abs(socialHighlight) + i) % 3
										].link
									}
									target="_blank"
									rel="noopener noreferrer"
									key={i}
								>
									<img
										src={
											socials[
												(Math.abs(socialHighlight) +
													i) %
													3
											].image
										}
										alt={
											socials[
												(Math.abs(socialHighlight) +
													i) %
													3
											].text
										}
									/>
									<span>
										{
											socials[
												(Math.abs(socialHighlight) +
													i) %
													3
											].text
										}
									</span>
								</a>
							))}
						<span onClick={() => setSocialHighlight((p) => p + 1)}>
							<img src={forwardArrow} alt="Forward Arrow" />
						</span>
					</div>
				</div>
				<div className="home-hero-side-logo">
					<img src={sideLogo} alt="Side Logo" />
				</div>
				<div
					className="home-hero-scroll"
					onClick={() => window.scrollTo(0, 100 * vh)}
				>
					<span className="home-hero-scroll__text">Scroll</span>
					<span className="home-hero-scroll__arrow"></span>
				</div>
			</section>
			<section className="home-about" id="about">
				<div className="home-about-left">
					<div className="home-about-group">
						<h1>About Us</h1>
						<p>
							Aavesh is an electronics society that strives to
							teach and help students acquire new skills in an era
							of rapidly evolving technology in the field of
							electronics and communication engineering.
						</p>
					</div>
					<div className="home-about-group">
						<h1>Vision</h1>
						<p>
							Empower students to acquire, demonstrate and
							articulate the value of knowledge and skills that
							will support them as lifelong lessons.
						</p>
					</div>
					<div className="home-about-group">
						<h1>Mission</h1>
						<p>
							To participate and contribute to the welfare of the
							institute and the nation and practice the core
							values.
						</p>
					</div>
				</div>
				<div className="home-about-right">
					<img src={teamwork} alt="Teamwork" />
				</div>
			</section>
			<section className="home-team" id="team">
				<div className="home-team-group">
					<h1>Office Bearers</h1>
					<div className="home-team-group__members">
						<Row>
							{officeBearers.map((member, index) => (
								<Col lg={33} key={index}>
									<div className="home-team-member">
										<div
											className="home-team-member__front"
											style={{
												backgroundImage: `url(${member.image})`,
											}}
										></div>
										<div
											className="home-team-member__back"
											style={{
												backgroundImage: `url(${member.image})`,
											}}
										>
											<span className="home-team-member__name">
												{member.name}
											</span>
											<span className="home-team-member__status">
												{member.title}
											</span>
										</div>
									</div>
								</Col>
							))}
						</Row>
					</div>
				</div>
				<div className="home-team-group">
					<h1>Coordinators</h1>
					<div className="home-team-group__members">
						<Row>
							{cooridnators.slice(0, 4).map((member, index) => (
								<Col lg={25} key={index}>
									<div className="home-team-member">
										<div
											className="home-team-member__front"
											style={{
												backgroundImage: `url(${member.image})`,
											}}
										></div>
										<div
											className="home-team-member__back"
											style={{
												backgroundImage: `url(${member.image})`,
											}}
										>
											<span className="home-team-member__name">
												{member.name}
											</span>
											<span className="home-team-member__status">
												{member.title}
											</span>
										</div>
									</div>
								</Col>
							))}
						</Row>
					</div>
				</div>
				<button className="home-team-btn">
					<span className="home-team-btn__arrow"></span>
					<span className="home-team-btn__text">View More</span>
				</button>
			</section>
		</main>
	);
};

export default Home;
