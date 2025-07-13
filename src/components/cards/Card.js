/** @format */

// components/Card.js
import React from "react";
import "./cards.css";

function Card({ title, subtitle, children, className = "" }) {
	return (
		<div className={`card ${className}`}>
			{title && <h3>{title}</h3>}
			{subtitle && <p>{subtitle}</p>}
			{children}
		</div>
	);
}

export default Card;
