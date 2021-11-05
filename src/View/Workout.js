import React, { useState } from 'react'
import WorkoutForm from '../Components/WorkoutForm/WorkoutForm'
import { useParams, Redirect } from 'react-router-dom'
import { useWorkout, useUpdateWorkout } from '../Context/workout-context'
import { useUpdateWorkoutInfo } from '../Context/pass-context'
import BackNav from '../Components/BackNav/BackNav'

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
      <WorkoutForm
        excercise={workout}
        weight={workouts[workout]}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Workout
