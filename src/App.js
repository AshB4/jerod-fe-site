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
import DividerWave from "./components/bg/DividerWave.js";
import HealthQuestionsForm from "./components/forms/HealthQuestionsForm.js";
import PatientDemographicsForm from "./components/forms/PatientDemographicsForm.js";

import CaregiverIcon from "./assets/icons/Caregiver.png";
import HeartHandsIcon from "./assets/icons/HeartHands.png";
import LocationIcon from "./assets/icons/Location.png";


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

					<section className="card-section">
						<DividerWave />
						<div className="card-grid">
							<Card
								title="For Caregivers"
								subtitle="Tips, advice..."
								icon={CaregiverIcon}
							/>
							<Card
								title="For Loved Ones"
								subtitle="Engaging activities..."
								icon={HeartHandsIcon}
							/>
							<Card
								title="Local Resources"
								subtitle="Find services nearby"
								icon={LocationIcon}
							/>
						</div>
					</section>

					<div className="form-section">
						<div className="form-container">
							<h2>Get Started</h2>
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
