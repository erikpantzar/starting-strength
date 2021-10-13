import React from "react";
import { useParams } from "react-router-dom";
import Typography from "../Components/Typography/Typography";
import { useWorkout } from "../Context/workout-context";
import { WORKOUTS_ORDER, WORKOUTS_SET_AND_REPS } from "../contants";

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
        On {exc[0]} you worked on{" "}
        {workouts[exc[0]] *
          WORKOUTS_SET_AND_REPS[exc[0]][0] *
          WORKOUTS_SET_AND_REPS[exc[0]][1]}{" "}
        kg for weight
      </Typography>

      <Typography>
        On {exc[1]} you worked on{" "}
        {workouts[exc[1]] *
          WORKOUTS_SET_AND_REPS[exc[1]][0] *
          WORKOUTS_SET_AND_REPS[exc[1]][1]}{" "}
        kg for weight
      </Typography>

      <Typography>
        On {exc[2]} you worked on{" "}
        {workouts[exc[2]] *
          WORKOUTS_SET_AND_REPS[exc[2]][0] *
          WORKOUTS_SET_AND_REPS[exc[2]][1]}{" "}
        kg for weight
      </Typography>
    </div>
  );
};

export default Great;
