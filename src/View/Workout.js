import React from "react";
import WorkoutForm from "../Components/WorkoutForm/WorkoutForm";
import { useParams } from "react-router-dom";
import { useWorkout, useUpdateWorkout } from "../Context/workout-context";

const Workout = () => {
  const { workout } = useParams();
  const { ...workouts } = useWorkout();
  const { handleWorkout } = useUpdateWorkout();

  const handleSubmit = (wo, weight) => {
    handleWorkout(wo, weight);
  };

  return (
    <div>
      <h1 style={{ textTransform: "Capitalize" }}>{workout}</h1>
      <WorkoutForm
        excercise={workout}
        weight={workouts[workout]}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Workout;
