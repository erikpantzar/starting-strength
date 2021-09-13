import WorkoutList from '../Components/WorkoutList/WorkoutList'


const workouts = ['squats', 'deadlift', 'bench']

const Workout = () => (
  <WorkoutList workouts={workouts} type="a" />
);

export default Workout;
