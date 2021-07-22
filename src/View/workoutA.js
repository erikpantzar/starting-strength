import WorkoutForm from "../Components/WorkoutForm";

const Workout = () => {
  const saveWorkout = (excercise, weight) => {
    console.log("whaaat " + excercise + " ", weight);
  };

  return <WorkoutForm excercise="bench" weight={60} onSubmit={saveWorkout} />;
};

export default Workout;
