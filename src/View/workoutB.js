import WorkoutList from "../Components/WorkoutList/WorkoutList";

const workouts = ["squats", "overhead", "lat"];

const Workout = () => <WorkoutList workouts={workouts} type="b" />;

export default Workout;
