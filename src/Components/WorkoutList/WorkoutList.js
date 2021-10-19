import { React } from 'react'
import { Link } from 'react-router-dom'
import doing from './doing-dot.svg'
import done from './done-dot.svg'
import { WORKOUTS_SET_AND_REPS } from '../../contants.js'
import './WorkoutList.css'

// const workouts = ['bench', 'squats']
const WorkoutList = ({ workouts, type }) => {
  return (
    <nav className="WorkoutList">
      {workouts.map((workout, weight) => (
        <Link
          className={[
            'WorkoutList-link',
            workout.state === 'WORKOUT_DONE' ? 'workout_isDone' : null,
          ].join(' ')}
          key={workout.name}
          to={`${type}/${workout.name}`}
        >
          <span className="WorkoutList-link-text workout">{workout.name}</span>
          <span className="WorkoutList-link-text reps">
            {WORKOUTS_SET_AND_REPS[workout.name][0]}x
            {WORKOUTS_SET_AND_REPS[workout.name][1]}
          </span>
          <span className="weight">{weight}kg</span>
          {workout.state === 'WORKOUT_DONE' ? (
            <div className="WorkoutList-link-icon">
              <img src={done} alt="done" />
            </div>
          ) : (
            <div className="WorkoutList-link-icon">
              <img src={doing} alt="doing" />
            </div>
          )}
        </Link>
      ))}
    </nav>
  )
}

export default WorkoutList
