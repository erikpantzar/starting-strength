import React from "react";
import WorkoutForm from "../Components/WorkoutForm/WorkoutForm";
import { useParams } from "react-router-dom";
import { useWorkout, useUpdateWorkout } from "../Context/workout-context";
import { useUpdateWorkoutInfo } from "../Context/pass-context";

const Workout = () => {
  const { workout, type } = useParams();
  const { ...workouts } = useWorkout();
  const { handleWorkout } = useUpdateWorkout();

  const { updateWorkouts } = useUpdateWorkoutInfo();

  const handleSubmit = (wo, weight) => {
    updateWorkouts(wo, type);
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
