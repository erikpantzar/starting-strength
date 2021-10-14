import React from "react";
import { Link } from "react-router-dom";
import arrow from "./WorkoutList-arrow.svg";
import "./WorkoutList.css";

// const workouts = ['bench', 'squats']
const WorkoutList = ({ workouts, type }) => {
  return (
    <nav className="WorkoutList">
      {workouts.map((workout) => (
        <Link
          className="WorkoutList-link"
          key={workout.name}
          to={`${type}/${workout.name}`}
        >
          <span className="WorkoutList-link-text">{workout.name}</span>
          {workout.state && workout.state}
          <div className="WorkoutList-link-icon">
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default WorkoutList;
