/** @format */

import React, { useState } from "react";
import QuestionsCheckbox from "./QuestionsCheckbox";
import RadioQuestions from "./RadioQuestions";
import "./FormElements.css"; 

function HealthQuestionsForm() {
	const [formData, setFormData] = useState({
		diabetes: "",
		cholesterol: "",
		hbp: "",
		autoimmune: "",
		thyroid: "",
		// add more as needed
	});

	const handleChange = (id, value) => {
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Health Form Data:", formData);
		// Trigger recommendation logic or API call
	};

	return (
		<form className="intake-form" onSubmit={handleSubmit}>
			<h2>Health Questions</h2>

			<RadioQuestions
				id="diabetes"
				label="Do you have pre-Diabetes or diabetes?"
				options={["Yes", "No", "Unsure"]}
				value={formData.diabetes}
				onChange={handleChange}
			/>

			<RadioQuestions
				id="cholesterol"
				label="Do you currently have high cholesterol or use statins?"
				options={["Yes", "No", "Unsure"]}
				value={formData.cholesterol}
				onChange={handleChange}
			/>

			<RadioQuestions
				id="hbp"
				label="Do you have high blood pressure (hypertension)?"
				options={["Yes", "No", "Unsure"]}
				value={formData.hbp}
				onChange={handleChange}
			/>

			<QuestionsCheckbox
				id="symptoms"
				label="Which symptoms have you experienced?"
				options={[
					"Chronic fatigue",
					"Brain fog",
					"Headaches",
					"Joint pain",
					"Sleep disturbances",
				]}
				values={formData.symptoms || []}
				onChange={(id, value) =>
					setFormData((prev) => ({ ...prev, [id]: value }))
				}
			/>

			<button type="submit" className="btn">
				Next
			</button>
		</form>
	);
}

export default HealthQuestionsForm;
// This component collects health-related questions and submits the data.