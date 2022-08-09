import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header-left">
				<Link to="/">
					<img src={logo} alt="Aavesh IIITU" />
				</Link>
			</div>
			<div className="header-right"></div>
		</header>
	);
};

export default Header;
