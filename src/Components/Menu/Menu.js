import "./Menu.css";
import { useState } from "react";

export const Toggler = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <div
                className={["Nav-backdrop", open && "nav--isOpen"].join(" ")}
                onClick={() => setOpen(!open)}
            />
            <button
                type="button"
                onClick={() => handleToggle()}
                className={["Toggler", (open && "Toggler--active": null)].join(" ")}
            >
                II
            </button>
            <nav
                className={["nav", open ? "nav--isOpen" : "nav--isClosed"].join(" ")}
            >
                <article>
                    <h2>What is Starting strength?</h2>
                    <p>
                        A workout program to get you started with basic excersices and get
                        stronger!
                    </p>
                </article>
            </nav>
        </>
    );
};

export default Toggler;
