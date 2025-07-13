import React from "react";

const PatientReport = ({ report }) => {
  const {
    name,
    age,
    gender,
    bmi,
    dietaryStyle,
    date,
    summary,
    labResults,
    recommendations,
    education
  } = report;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', padding: '2rem', maxWidth: '800px', background: '#fff', color: '#333' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/logo.png" alt="BetterMindCare Logo" width="150" />
        <h1 style={{ color: '#006080' }}>Patient Health & Wellness Report</h1>
        <p>Date: <strong>{date}</strong></p>
      </header>

      <section style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
        <h2 style={{ color: '#006080' }}>Patient Overview</h2>
        <p><strong>Name:</strong> {name}<br />
        <strong>Age:</strong> {age}<br />
        <strong>Gender:</strong> {gender}<br />
        <strong>BMI:</strong> {bmi}<br />
        <strong>Dietary Style:</strong> {dietaryStyle}</p>
      </section>

      <section style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
        <h2 style={{ color: '#006080' }}>Summary of Findings</h2>
        <div style={{ background: '#fff8dc', padding: '0.5rem', borderLeft: '4px solid #f39c12' }}>
          <p>{summary}</p>
        </div>
      </section>

      <section style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
        <h2 style={{ color: '#006080' }}>Lab Results</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Test</th>
              <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Result</th>
              <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Reference Range</th>
              <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {labResults.map((test, idx) => (
              <tr key={idx}>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{test.name}</td>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{test.result}</td>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{test.range}</td>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{test.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
        <h2 style={{ color: '#006080' }}>Personalized Recommendations</h2>
        <ul>
          {recommendations.map((rec, idx) => <li key={idx}>{rec}</li>)}
        </ul>
      </section>

      <section style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
        <h2 style={{ color: '#006080' }}>Educational Insights</h2>
        {education.map((block, idx) => (
          <p key={idx}><strong>{block.title}:</strong> {block.text}</p>
        ))}
      </section>

      <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>BetterMindCare, LLC | support@bettermindcare.com | All rights reserved</p>
        <small>This report is for informational purposes and not a substitute for professional medical advice.</small>
      </footer>
    </div>
  );
};

export default PatientReport;
