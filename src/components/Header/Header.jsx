import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import logo from "../../images/logo.png";
import navLinks from "../../utils/navigation";
import "./header.css";

const Header = () => {
	const { breakpoint } = useContext(GlobalContext);
	return (
		<header className="header">
			<div className="header-left">
				<Link to="/">
					<img src={logo} alt="Aavesh IIITU" />
				</Link>
			</div>
			{!(breakpoint("mobile") || breakpoint("tab")) && (
				<div className="header-right">
					<nav className="header-right-nav header-nav">
						<ul className="header-nav-ul">
							{navLinks.map((navLink, id) => (
								<li key={id}>
									<Link to={navLink.link}>
										{navLink.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
