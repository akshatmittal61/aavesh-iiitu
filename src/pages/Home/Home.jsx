import React from "react";
import favicon from "../../images/favicon.png";
import bg from "../../images/bg.jpg";
import "./home.css";

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
							Bringing the future to masses.
						</span>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
