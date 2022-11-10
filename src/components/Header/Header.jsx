import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import navLinks from "../../utils/navigation";
import { transparentLogo } from "../../vectors";
import "./header.scss";

const Header = () => {
	const { breakpoint } = useContext(GlobalContext);
	return (
		<header className="header">
			<div className="header-left">
				<Link to="/">
					<img src={transparentLogo} alt="Aavesh IIITU" />
				</Link>
			</div>
			{!(breakpoint("mobile") || breakpoint("tab")) && (
				<div className="header-right">
					<nav className="header-right-nav header-nav">
						<ul className="header-nav-ul">
							{navLinks.map((navLink, id) => (
								<li key={id}>
									<a href={navLink.link} target="_self">
										{navLink.text}
									</a>
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
