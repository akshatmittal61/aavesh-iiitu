import React from "react";
import favicon from "../../images/favicon.png";
import bg from "../../images/bg.jpg";
import "./home.css";
import MaterialIcons from "../../components/MaterialIcons";

const Home = () => {
	return (
		<main className="home">
			<section
				className="home-hero"
				style={{
					backgroundImage: `url(${bg})`,
				}}
			>
				<div className="home-hero-left">
					<img src={favicon} alt="Aavesh IIITU" data-aos="zoom-in" />
				</div>
				<div className="home-hero-right">
					<div className="home-hero-right-head">
						<h1 data-aos="fade-left">Aavesh</h1>
					</div>
					<div className="home-hero-right-bottom">
						<span data-aos="fade-left">
							Creating ideas with technology and imagination
						</span>
					</div>
				</div>
				<button
					className="home-hero-scroll-btn"
					onClick={() => {
						window.scrollTo(0, window.innerHeight);
					}}
				>
					<MaterialIcons>expand_more</MaterialIcons>
				</button>
			</section>
			<section className="home-about">
				<div className="home-about-head">
					<h1>About Us</h1>
				</div>
				<div className="home-about-body">
					<p>
						Aavesh is an electronics society that strives to teach
						and help students acquire new skills in an era of
						rapidly evolving technology in the field of electronics
						and communication engineering. The Society aims to
						provide potential minds of IIITU a platform to discuss
						innovative ideas and nurture their skills to tackle real
						life challenges in the world today and contribute to the
						technical society through various projects, patents and
						research publications. We will be organizing various
						expert lectures, workshops, mentorship programs as well
						as competitions throughout the year to keep the students
						learning and providing them the necessary resources to
						implement their ideas. Activities of this club are
						published in the Current event section in every
						semester.
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
