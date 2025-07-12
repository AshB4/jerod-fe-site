/** @format */

import "./navbar.css";
// import logo from "../assets/logo.png";

function Navbar() {
	return (
		<nav className="navbar" aria-label="Main navigation">
			<div className="navbar-left">
				{/* <img src={logo} alt="BetterMindCare logo" className="logo" /> */}
				<span className="brand">bettermindcare</span>
			</div>
			<ul className="navbar-right">
				<li><a href="#about">ABOUT</a></li>
				<li><a href="#services">SERVICES</a></li>
				<li><a href="#resources">RESOURCES</a></li>
				<li><a href="#contact">CONTACT</a></li>
			</ul>
		</nav>
	);
}

export default Navbar;

