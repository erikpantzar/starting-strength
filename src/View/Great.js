import React from "react";
import { useParams } from "react-router-dom";
import Typography from "../Components/Typography/Typography";
import { useWorkout } from "../Context/workout-context";
import { WORKOUTS_ORDER } from "../contants";

const Great = () => {
  const { ...workouts } = useWorkout();
  const { type } = useParams();

  const exc = WORKOUTS_ORDER[type];

  return (
    <div>
      <Typography variant="h1">You finished, that is great!</Typography>
      <Typography>
        You did variant {type}, next time you should to the other variant.
      </Typography>
      <Typography>
        On {exc[0]} you worked on {workouts[exc[0]]} kgs for weight
      </Typography>
    </div>
  );
};

export default Great;
