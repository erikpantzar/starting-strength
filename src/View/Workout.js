import React, { useState } from 'react'
import WorkoutForm from '../Components/WorkoutForm/WorkoutForm'
import { useParams, Redirect } from 'react-router-dom'
import { useWorkout, useUpdateWorkout } from '../Context/workout-context'
import { useUpdateWorkoutInfo } from '../Context/pass-context'
import { WORKOUTS_SET_AND_REPS } from '../contants'
import BackNav from '../Components/BackNav/BackNav'
import Typography from '../Components/Typography/Typography'

const Workout = () => {
  const { workout, type } = useParams()
  const { ...workouts } = useWorkout()
  const { handleWorkout } = useUpdateWorkout()
  const { updateWorkouts } = useUpdateWorkoutInfo()

  const [redirect, setRedirect] = useState()

  const handleSubmit = (wo, weight) => {
    updateWorkouts(wo, type)
    handleWorkout(wo, weight)

    setRedirect(`/workout/${type}`)
  }

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <div>
      <BackNav route={{ url: `/workout/${type}`, name: 'Back' }} />
      <Typography variant="h1" style={{ textTransform: 'Capitalize' }}>
        {workout}
      </Typography>
      <Typography variant="h2">
        Here you should do {workout} for {WORKOUTS_SET_AND_REPS[workout][0]}{' '}
        sets of {WORKOUTS_SET_AND_REPS[workout][1]} repetitions. Then save and
        continue to the next exercise.
      </Typography>
      <WorkoutForm
        excercise={workout}
        weight={workouts[workout]}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Workout
