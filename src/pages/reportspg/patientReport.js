/** @format */

import React from "react";
import "./patientReport.css";

function PatientReport() {
	return (
		<div className="patient-report-page">
			<h1>Patient Report</h1>
			<p className="timestamp">Generated on: July 13, 2025</p>

			<section className="report-section">
				<h2>Summary</h2>
				<p>
					This report provides a personalized overview based on your intake
					data, lab results, and optional screening tests. The recommendations
					are evidence-based and designed to support brain health, lifestyle
					improvements, and prevention strategies.
				</p>
			</section>

			<section className="report-section">
				<h2>Lab Results</h2>
				<ul>
					<li>
						<strong>Homocysteine:</strong> 11.3 µmol/L — Slightly elevated. Aim
						for &lt; 10 µmol/L.
					</li>
					<li>
						<strong>Vitamin B12:</strong> 420 pg/mL — Borderline. Consider
						food/supplement support.
					</li>
					<li>
						<strong>CRP (inflammation):</strong> 1.2 mg/dL — Moderate. Target
						&lt; 0.9 mg/dL.
					</li>
				</ul>
			</section>

			<section className="report-section">
				<h2>Recommendations</h2>
				<ul>
					<li>✅ Add B-complex (with methylated B12 and Folate)</li>
					<li>✅ Reduce processed sugar to help lower CRP and insulin</li>
					<li>
						✅ Get 15+ min of outdoor sunlight exposure per day for natural
						vitamin D
					</li>
				</ul>
			</section>

			<section className="report-section">
				<h2>Next Steps</h2>
				<p>
					You can order additional lab tests, retake your cognition test, or
					discuss your report with a care advisor. Your results and this report
					are always available on your dashboard.
				</p>
			</section>

			<div className="report-actions">
				<button className="btn">Download PDF</button>
			</div>
		</div>
	);
}

export default PatientReport;
