import WorkoutList from "../Components/WorkoutList/WorkoutList";
import { useWorkoutInfo, useReset } from "../Context/pass-context";
import { useParams } from "react-router-dom";

const Workout = () => {
  const { type } = useParams();
  const { ...workouts } = useWorkoutInfo();
  const { reset } = useReset();

  return (
    <>
      <WorkoutList workouts={workouts[type === "a" ? 0 : 1]} type={type} />
      <button onClick={() => reset()}>Reset workout</button>
    </>
  );
};

export default Workout;
