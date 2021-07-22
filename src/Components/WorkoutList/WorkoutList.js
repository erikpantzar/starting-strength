import React from "react";
import { Link } from 'react-router-dom'
import Item from "../WorkoutItem/Item";
import arrow from './WorkoutList-arrow.svg'
import "./WorkoutList.css";

// const workouts = ['bench', 'squats']
const WorkoutList = ({ workouts }) => (
    <nav className="WorkoutList">
        {workouts.map((workout) => (
            <Link className="WorkoutList-link" to={`/${workout}`}>
                <span className="WorkoutList-link-text">{workout}</span>
                <div className="WorkoutList-link-icon"><img src={arrow} /></div>
            </Link>
        ))}
    </nav>
);

export default WorkoutList;
