import WorkoutList from "../Components/WorkoutList/WorkoutList";
import Typography from "../Components/Typography/Typography";
import { useParams } from "react-router-dom";
import { WORKOUTS_ORDER } from "../contants";

const Workout = () => {
  const { type } = useParams();

  return (
    <div>
      <Typography variant="h1">Wich exercise will you start with?</Typography>
      <WorkoutList workouts={WORKOUTS_ORDER[type]} type={type} />
    </div>
  );
};

export default Workout;
