import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import navLinks from "../../utils/navigation";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header-left">
				<Link to="/">
					<img src={logo} alt="Aavesh IIITU" />
				</Link>
			</div>
			<div className="header-right">
				<nav className="header-right-nav header-nav">
					<ul className="header-nav-ul">
						{navLinks.map((navLink, id) => (
							<li key={id}>
								<Link to={navLink.link}>{navLink.text}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
