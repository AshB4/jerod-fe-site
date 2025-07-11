/** @format */

import PrimaryButton from "./components/buttons/PrimaryButton";
import SecondaryButton from "./components/buttons/SecondaryButton";
import NavyButton from "./components/buttons/NavyButton";
import "./buttonStyles.css";


function buttons() {
	return (
		<div>
			<PrimaryButton>Learn More</PrimaryButton>
			<SecondaryButton>Resources</SecondaryButton>
			<NavyButton>Start Now</NavyButton>
		</div>
	);
}
export { PrimaryButton, SecondaryButton, NavyButton };
