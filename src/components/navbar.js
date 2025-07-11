/** @format */

import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Change this path to your logo

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<img src={logo} alt="BetterMindCare logo" className="logo" />
				<span className="brand">bettermindcare</span>
			</div>
			<ul className="navbar-right">
				<li>
					<a href="#about">ABOUT</a>
				</li>
				<li>
					<a href="#services">SERVICES</a>
				</li>
				<li>
					<a href="#resources">RESOURCES</a>
				</li>
				<li>
					<a href="#contact">CONTACT</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
