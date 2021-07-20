import { Route } from "react-router-dom";
import WorkoutForm from "../Components/WorkoutForm";

const Workout = () => {
  const saveWorkout = (excercise, weight) => {
    console.log("whaaat " + excercise + " ", weight);
  };

  return (
    <div>
      <WorkoutForm excercise="bench" weight={60} onSubmit={saveWorkout} />

      <Route
        path="/workout/A/edit"
        render={() => <div>CHEnnanaaaa</div>}
      ></Route>
    </div>
  );
};

export default Workout;
