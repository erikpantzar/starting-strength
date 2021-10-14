import WorkoutList from "../Components/WorkoutList/WorkoutList";
import Typography from "../Components/Typography/Typography";
import { useParams } from "react-router-dom";
import { WORKOUTS_ORDER } from "../contants";

const Workout = () => {
  const { type } = useParams();

  const sentence = () => {
      const sentences = [
          'Which exercise will you start with?',
          'Soo... What do we have here?',
          'What exercise do we do now?',
          'Was someone curling in the rack again?!',
          'Which one do we finish this of  with?'
      ]

      const randomNumber = Math.floor(Math.random() * sentences.length - 1) + 1;
      return sentences[randomNumber]
  }

  return (
    <div>
      <Typography variant="h1">{sentence()}</Typography>
      <WorkoutList workouts={WORKOUTS_ORDER[type]} type={type} />
    </div>
  );
};

export default Workout;
