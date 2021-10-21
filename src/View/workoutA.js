import { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import WorkoutList from '../Components/WorkoutList/WorkoutList'
import Typography from '../Components/Typography/Typography'
import { useWorkoutInfo, useReset } from '../Context/pass-context'
import BackNav from '../Components/BackNav/BackNav'
import Button from '../Components/Button/Button'

const Workout = () => {
  const { reset } = useReset()
  const { ...workouts } = useWorkoutInfo()
  const { type } = useParams()
  const [redirect, setRedirect] = useState()

  const typeToIndex = type === 'a' ? 0 : 1
  const finishedNumberOfWorkouts = workouts[typeToIndex].filter(
    (el) => el.state === 'WORKOUT_DONE'
  ).length

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

  useEffect(() => {
    if (finishedNumberOfWorkouts === workouts[typeToIndex].length) {
      setRedirect(`/workout/${type}/finished`)
    }
  }, [finishedNumberOfWorkouts, workouts, typeToIndex, type])

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <div>
      <BackNav route={{ url: `/`, name: 'Back' }} />
      <Typography variant="h1">{sentence()}</Typography>
      <WorkoutList workouts={workouts[type === 'a' ? 0 : 1]} type={type} />

      <Button onClick={() => reset()} variant="ghost">
        Reset workout
      </Button>
    </div>
  )
}
export default Workout
