import React, { useState } from "react";
import { Instagram, Link, Linkedin, Mail } from "react-feather";
import { circuitBg } from "../../images";
import Row, { Col } from "../../Layout/Responsive";
import { cooridnators, officeBearers } from "../../utils/team";
import { backwardArrow, forwardArrow, teamwork } from "../../vectors";
import "./home.scss";

const Home = () => {
	const vh = window.innerHeight * 0.01;
	const [heroText, setHeroText] = useState("Electronics");
	const socials = [
		{
			link: "https://www.instagram.com/teamaavesh/",
			icon: <Instagram />,
			text: "Instagram",
			username: "teamaavesh",
			linkText: "instagram.com/teamaavesh",
		},
		{
			link: "https://www.linkedin.com/company/aavesh-iiitu/",
			icon: <Linkedin />,
			text: "LinkedIn",
			username: "aavesh-iiitu",
			linkText: "linkedin.com/company/aavesh-iiitu",
		},
		{
			link: "mailto:aavesh@iiitu.ac.in",
			icon: <Mail />,
			text: "Email",
			username: "aavesh@iiitu.ac.in",
			linkText: "aavesh@iiitu.ac.in",
		},
	];
	const [activeSocial, setActiveSocial] = useState(1);
	return (
		<main
			className="home"
			style={{
				backgroundImage: `url(${circuitBg})`,
			}}
		>
			<section className="home-hero">
				<div className="home-hero-content">
					<h1>Learn {heroText} and create</h1>
				</div>
				<div className="home-hero-socials">
					<span className="home-hero-socials__head">
						Check Us out on
					</span>
					<div className="home-hero-socials__body">
						<span>
							<img src={backwardArrow} alt="Backward Arrow" />
						</span>
						{socials.map((social, index) => (
							<a
								key={index}
								href={social.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`home-hero-socials__body__link ${
									activeSocial === index ? "active" : ""
								}`}
								onMouseEnter={() => setActiveSocial(index)}
								onMouseLeave={() => setActiveSocial(1)}
							>
								{social.icon}
								<span>{social.text}</span>
							</a>
						))}
						<span>
							<img src={forwardArrow} alt="Forward Arrow" />
						</span>
					</div>
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
