import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import GlobalContext from "./Context/GlobalContext";

const App = () => {
	const { setOpenNav } = useContext(GlobalContext);
	AOS.init();
	const location = useLocation();
	useEffect(() => {
		setOpenNav(false);
	}, [location.pathname, setOpenNav]);
	return (
		<>
			<Header />
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
