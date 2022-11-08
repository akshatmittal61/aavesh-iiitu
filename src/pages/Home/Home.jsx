import React, { useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import { hexagons, moon, stars } from "../../images";
import projects from "../../utils/projects";
import socials from "../../utils/socials";
import { pillar } from "../../vectors";
import "./home.scss";

const Home = () => {
	const vh = window.innerHeight * 0.01;
	const [arrowsSectionStyles, setarrowsSectionStyles] = useState({
		backgroundImage: `url(${hexagons})`,
		opacity: 0,
	});
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50 * vh) {
				console.log("set");
				setarrowsSectionStyles(() => ({
					backgroundImage: `url(${hexagons})`,
					opacity: 1,
				}));
			} else
				setarrowsSectionStyles({ backgroundImage: `none`, opacity: 0 });
		});
	}, [vh]);

	return (
		<main className="home">
			<section className="home-hero" style={{
				backgroundImage: `url(${stars})`,
			}}>
				<div className="home-hero-content">
					<h1>Learn Electronics and Create</h1>
				</div>
				<div className="home-hero-socials">
					{socials.map((social, index) => (
						<a
							href={social.link}
							target="_blank"
							rel="noreferrer"
							key={index}
						>
							{social.icon}
						</a>
					))}
				</div>
				<div className="home-hero-scroll">
					<span className="home-hero-scroll__text">Scroll</span>
					<span className="home-hero-scroll__arrow"></span>
				</div>
				<div className="home-hero-moon">
					<img src={moon} alt="Moon" />
				</div>
			</section>
			<section className="home-about">
				<div className="home-about-head">
					<h1>About Us</h1>
				</div>
				<div className="home-about-body">
					<p>
						Aavesh is electronics society that strives to teach and
						help students acquire new skills in an era of rapidly
						evolving technology in the field of electronics and
						communication engineering. The Society aims to provide
						potential minds of IIITU a platform to discuss
						innovative ideas and nurture their skills to tackle real
						life challenges in the world today and contribute to the
						technical society through various projects, patents and
						research publications.
					</p>
				</div>
			</section>
			<section className="home-projects">
				<div className="home-projects-head">
					<h1>Our Projects</h1>
				</div>
				<div className="home-projects-body">
					<div className="home-projects-tray">
						{projects.map((project, index) => (
							<Project key={index} {...project} />
						))}
					</div>
				</div>
			</section>
			<div className="home-arrows" style={arrowsSectionStyles}>
				<div className="home-arrows-left">
					<div className="home-arrows-left__img">
						<img src={pillar} alt="Pillar" />
					</div>
				</div>
				<div className="home-arrows-right">
					<div className="home-arrows-right__img">
						<img src={pillar} alt="Pillar" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
