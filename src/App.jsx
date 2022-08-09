import React from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
	AOS.init();
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
