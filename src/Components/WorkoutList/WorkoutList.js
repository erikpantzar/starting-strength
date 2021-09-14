import React from "react";
import { Link } from "react-router-dom";
import arrow from "./WorkoutList-arrow.svg";
import "./WorkoutList.css";

// const workouts = ['bench', 'squats']
const WorkoutList = ({ workouts, type }) => {

    return (
        <nav className="WorkoutList">
            {workouts.map((workout) => (
                <Link className="WorkoutList-link" key={workout} to={`${type}/${workout}`}>
                    <span className="WorkoutList-link-text">{workout}</span>
                    <div className="WorkoutList-link-icon">
                        <img src={arrow} alt="arrow" />
                    </div>
                </Link>
            ))}
        </nav>
    );
};

export default WorkoutList;
