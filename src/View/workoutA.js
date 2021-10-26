import { useParams } from 'react-router-dom'
import WorkoutList from '../Components/WorkoutList/WorkoutList'
import Typography from '../Components/Typography/Typography'
import { useWorkoutInfo, useReset } from '../Context/pass-context'
import BackNav from '../Components/BackNav/BackNav'

const Workout = () => {
  const { reset } = useReset()
  const { ...workouts } = useWorkoutInfo()
  const { type } = useParams()

  const sentence = () => {
    const sentences = [
      'Which exercise will you start with?',
      'Soo... What do we have here?',
      'What exercise do we do now?',
      'Was someone curling in the rack again?!',
      'Which one do we finish this of  with?',
    ]

    const randomNumber = Math.floor(Math.random() * sentences.length - 1) + 1
    return sentences[randomNumber]
  }

  return (
    <div>
      <BackNav route={{ url: `/`, name: 'Back' }} />
      <Typography variant="h1">{sentence()}</Typography>
      <WorkoutList workouts={workouts[type === 'a' ? 0 : 1]} type={type} />
      <button type="button" onClick={() => reset()}>
        Reset workout
      </button>
    </div>
  )
}
export default Workout
