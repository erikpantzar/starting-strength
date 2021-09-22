import React from "react";
import { Link } from "react-router-dom";
import arrow from "./WorkoutList-arrow.svg";
import "./WorkoutList.css";

/* const workouts = [
  {
    name: "Bench",
    status: "WORKOUT_DONE",
  },
  {
    name: "Squats",
    status: "",
  },
];
*/

const WorkoutList = ({ workouts, type }) => {
  return (
    <nav className="WorkoutList">
      {workouts.map((workout) => (
        <Link
          className={[
            "WorkoutList-link",
            workout.status === "WORKOUT_DONE" && "WorkoutList-link--isDone",
          ].join(" ")}
          key={workout}
          to={`${type}/${workout.name}`}
        >
          <span className="WorkoutList-link-text">{workout.name}</span>
          <div className="WorkoutList-link-icon">
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default WorkoutList;
