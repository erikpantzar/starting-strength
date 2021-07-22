import { BrowserRouter as Router } from 'react-router-dom'
import WorkoutList from './WorkoutList'

export default { 
  title: 'Workout/List',
  component: WorkoutList
}

export const Primary = () => <Router><WorkoutList workouts={['squats', 'bench', 'deadlift']} /></Router>