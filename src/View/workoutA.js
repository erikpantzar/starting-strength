import WorkoutList from "../Components/WorkoutList/WorkoutList";
import { useWorkoutInfo, useReset } from "../Context/pass-context";
import { useParams } from "react-router-dom";
import BackNav from "../Components/BackNav/BackNav";

const Workout = () => {
  const { type } = useParams();
  const { ...workouts } = useWorkoutInfo();
  const { reset } = useReset();

  return (
    <>
      <BackNav route={{ url: `/`, name: "Back" }} />
      <WorkoutList workouts={workouts[type === "a" ? 0 : 1]} type={type} />
      <button onClick={() => reset()}>Reset workout</button>
    </>
  );
};

export default Workout;
