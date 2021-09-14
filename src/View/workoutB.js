import WorkoutList from "../Components/WorkoutList/WorkoutList";

const workouts = ["squats", "press", "pull"];

const Workout = () => <WorkoutList workouts={workouts} type="b" />;

export default Workout;
