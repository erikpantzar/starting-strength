import { React } from 'react'
import { Link } from 'react-router-dom'
import { WORKOUTS_SET_AND_REPS } from '../../contants.js'
import './WorkoutList.css'
import { useWorkout } from '../../Context/workout-context'

// const workouts = ['bench', 'squats']
const WorkoutList = ({ workouts, type }) => {
  const { ...weightOfExercise } = useWorkout()

  return (
    <nav className="WorkoutList">
      {workouts.map((workout) => (
        <Link
          className="WorkoutList-link"
          key={workout.name}
          to={`${type}/${workout.name}`}
        >
          <span className="WorkoutList-link-text WorkoutList-workout">
            {workout.name}
          </span>
          <span className="WorkoutList-link-text WorkoutList-reps">
            {WORKOUTS_SET_AND_REPS[workout.name][0]}x
            {WORKOUTS_SET_AND_REPS[workout.name][1]}
          </span>
          <span className="WorkoutList-weight">
            {weightOfExercise[workout.name]}kg
          </span>
          <div
            className={[
              'WorkoutList-status-icon',
              workout.state && 'WorkoutList-status-icon--isDone',
            ].join(' ')}
          />
        </Link>
      ))}
    </nav>
  )
}

export default WorkoutList

//
