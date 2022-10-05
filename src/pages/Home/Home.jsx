import React, { useContext } from "react";
import favicon from "../../images/favicon.png";
import homeBg from "../../images/bg.jpg";
import teamBg from "../../images/team-bg.webp";
import "./home.css";
import MaterialIcons from "../../components/MaterialIcons";
import Button from "../../components/Button/Button";
import { ArrowRight } from "react-feather";
import Row, { Col } from "../../Layout/Responsive";
import { office } from "../../utils/team";
import Card from "../../components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";

const Home = () => {
	const { breakpoint } = useContext(GlobalContext);

	const faqs = [
		{
			question: "What is AAVESH? ",
			answer: "AAVESH is an organization, the electronic society of IIIT Una which deals with the electronic Innovation and various technologies. ",
		},
		{
			question: "How to join AAVESH? ",
			answer: "Every year, freshman interviews are conducted with all the required manner. ",
		},
		{
			question: "What are the skills required to join AAVESH? ",
			answer: "You have to be a team member and passionate about your work and enthusiastic towards the position. ",
		},
		{
			question: "What could be the benefits in being in AAVESH? ",
			answer: "You will learn to deal with various types of work and time management and also get a chance to work on various events. Also you can get various merchandise inside the club. ",
		},
		{
			question: "How does AAVESH enhance your career? ",
			answer: "It. brings a mindset to work as a team and teaches you the time management and team management. It gives you various project works which will be useful for the resume too.",
		},
	];
	return (
		<main className="home">
			<section
				className="home-hero"
				style={{
					backgroundImage: `url(${homeBg})`,
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
			<section
				className="home-team"
				style={{
					backgroundImage: `url(${teamBg})`,
				}}
			>
				<div className="home-team-head">
					<h1>Our Team</h1>
					<Button
						text={
							<>
								View All <ArrowRight />
							</>
						}
						color="white"
						link="/team"
					/>
				</div>
				<div className="home-team-body">
					<Row>
						{office.map((person, id) => (
							<Col
								lg={33}
								md={
									id === office.length - 1 &&
									(breakpoint("tab") || breakpoint("mobile"))
										? 100
										: 50
								}
								sm={100}
								key={id}
							>
								<Card {...person} />
							</Col>
						))}
					</Row>
				</div>
			</section>
			<section className="home-about">
				<div className="home-about-head">
					<h1>Why should you join us?</h1>
				</div>
				<div className="home-about-body">
					<p>
						Experience, Explore, Enhance and Innovate. AAVESH is a
						society where you learn better, enhance skills, explore
						ideas and work with an experienced team with a great
						understanding and vision. You should be the part of this
						amazing team and work to grow your skills in a positive
						way. We as a team make various projects and real life
						helping ideas and innovation. You will definitely get
						your best version here. Join now!
					</p>
				</div>
			</section>
			<section className="home-about">
				<div className="home-about-head">
					<h1
						style={{
							color: "var(--bgcolor)",
						}}
					>
						FAQs
					</h1>
				</div>
				<div className="home-about-body">
					<p
						style={{
							fontSize: "1.25rem",
						}}
					>
						<div class="tabs">
							{faqs.map((faq, id) => (
								<div class="tab" key={id}>
									<input type="checkbox" id={`chck${id}`} />
									<label class="tab-label" for={`chck${id}`}>
										{faq.question}
									</label>
									<div class="tab-content">{faq.answer}</div>
								</div>
							))}
						</div>
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
