import "./Menu.css";
import { useState } from "react";

export const Toggler = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<button
			type="button"
			onClick={() => handleToggle()}
			className={["Toggler", open ? "Toggler--active" : null].join(" ")}
		>
			II
		</button>
	);
};

export default Toggler;
