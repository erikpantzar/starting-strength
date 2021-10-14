import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import WorkoutForm from "../Components/WorkoutForm/WorkoutForm";
import { useWorkout, useUpdateWorkout } from "../Context/workout-context";
import { WORKOUTS_ORDER, WORKOUTS_SET_AND_REPS } from "../contants";

const Workout = () => {
  const [redirect, setRedirect] = useState(null);
  const { workout, type } = useParams();
  const { ...workouts } = useWorkout();
  const { handleWorkout } = useUpdateWorkout();

  const handleSubmit = (wo, weight) => {
    handleWorkout(wo, weight);
    setRedirect(`/workout/${type}`)
  };

  return (
    <div>
      <h1 style={{ textTransform: "Capitalize" }}>{workout}</h1>
      <h2>
        Here you should do {workout} for {WORKOUTS_SET_AND_REPS[workout][0]}{" "}
        sets of {WORKOUTS_SET_AND_REPS[workout][1]} repetitions. Then save and
        continue to the next exercise.
      </h2>
      <WorkoutForm
        excercise={workout}
        weight={workouts[workout]}
        onSubmit={handleSubmit}
      />

      {redirect && <Redirect to={redirect} />}
    </div>
  );
};

export default Workout;
