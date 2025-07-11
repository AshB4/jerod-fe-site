/** @format */

import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PrimaryButton from "./components/buttons/PrimaryButton";
import SecondaryButton from "./components/buttons/SecondaryButton";
import NavyButton from "./components/buttons/NavyButton";

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
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default App;
