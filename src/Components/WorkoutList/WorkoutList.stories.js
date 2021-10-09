import { BrowserRouter as Router } from 'react-router-dom'
import WorkoutList from './WorkoutList'

export default {
  title: 'Workout/List',
  component: WorkoutList,
}

export const Primary = () => (
  <Router>
    <WorkoutList
      workouts={[
        {
          name: 'Squats',
          status: 'WORKOUT_DONE',
        },

        {
          name: 'Deadlift',
          status: '',
        },
        { name: 'Bench', status: '' },
      ]}
    />
  </Router>
)

export const Secondary = () => (
  <Router>
    <WorkoutList
      workouts={[
        {
          name: 'Squats',
          status: 'WORKOUT_DONE',
        },

        {
          name: 'Deadlift',
          status: 'WORKOUT_DONE',
        },
        { name: 'Bench', status: '' },
      ]}
    />
  </Router>
)
