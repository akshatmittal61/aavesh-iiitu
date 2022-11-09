import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss";
import Home from "./pages/Home/Home";
// import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import GlobalContext from "./Context/GlobalContext";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import NotFound from "./pages/NotFound/NotFound";
import Gallery from "./pages/Gallery/Gallery";
import Wall from "./pages/Wall/Wall";
import { nightSky } from "./images";

const App = () => {
	const { setOpenNav, breakpoint } = useContext(GlobalContext);
	AOS.init();
	const location = useLocation();
	useEffect(() => {
		document.body.style.backgroundImage = `url(${nightSky})`;
	}, [])
	
	useEffect(() => {
		setOpenNav(false);
	}, [location.pathname, setOpenNav]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			{/* <Header /> */}
			{(breakpoint("mobile") || breakpoint("tab")) && <Navigation />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/team" element={<Team />} />
				<Route path="/wall-of-fame" element={<Wall />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
