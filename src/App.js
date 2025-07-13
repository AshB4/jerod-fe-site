/** @format */

import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar.js";
import Footer from "./components/footers/Footer.js";
import Card from "./components/cards/Card.js";
import {
	NavyButton,
	SecondaryButton,
	PrimaryButton,
} from "./components/button/Buttons.js";
import HealthQuestionsForm from "./components/forms/HealthQuestionsForm.js";
import PatientDemographicsForm from "./components/forms/PatientDemographicsForm.js";


function App() {
	return (
		<div className="App">
			<Navbar />

			<main className="main-content">
				<section className="hero-section">
					<h1>Supporting Alzheimer's Care & Families</h1>
					<p>
						We're here to guide, support, and empower caregivers and loved ones
						every step of the way.
					</p>

					<div className="button-row">
						<PrimaryButton>Learn More</PrimaryButton>
						<SecondaryButton>Resources</SecondaryButton>
						<NavyButton>Start Now</NavyButton>
					</div>
					<div className="card-wrapper">
						<Card title="Welcome" subtitle="Your intake is scheduled">
							<button className="btn">View Details</button>
						</Card>
					</div>

					<div className="card-grid">
						<Card title="For Caregivers" subtitle="Tips, advice..." />
						<Card title="For Loved Ones" subtitle="Engaging activities..." />
						<Card title="Local Resources" subtitle="Find services nearby" />
					</div>

					<div className="form-section">
					<div className="form-container">
						<PatientDemographicsForm />
						</div>
						<div className="form-container">
						<HealthQuestionsForm />
						</div>
						</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default App;
