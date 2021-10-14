import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Typography from '../Components/Typography/Typography'
import { useWorkout } from '../Context/workout-context'
import { useReset } from '../Context/pass-context'
import { WORKOUTS_ORDER, WORKOUTS_SET_AND_REPS } from '../contants'

const Great = () => {
  const { ...workouts } = useWorkout()
  const { reset } = useReset()
  const { type } = useParams()

  useEffect(() => {
    reset()
  })

  const exc = WORKOUTS_ORDER[type]
  const total =
    workouts[exc[0]] *
      WORKOUTS_SET_AND_REPS[exc[0]][0] *
      WORKOUTS_SET_AND_REPS[exc[0]][1] +
    workouts[exc[1]] *
      WORKOUTS_SET_AND_REPS[exc[1]][0] *
      WORKOUTS_SET_AND_REPS[exc[1]][1] +
    workouts[exc[2]] *
      WORKOUTS_SET_AND_REPS[exc[2]][0] *
      WORKOUTS_SET_AND_REPS[exc[2]][1]

  return (
    <div>
      <Typography variant="h1">You are done for today! Good job!</Typography>
      <Typography>
        You did variant {type}, next time you should to the other variant.
      </Typography>
      <Typography>
        On {exc[0]} you worked on {workouts[exc[0]]}
        kg for weight
      </Typography>

      <Typography>
        On {exc[1]} you worked on {workouts[exc[1]]}
        kg for weight
      </Typography>

      <Typography>
        On {exc[2]} you worked on {workouts[exc[2]]}
        kg for weight
      </Typography>

      <Typography variant="h2">
        And the total working volume result is {total}kgs!!
      </Typography>

      <Link to="/">Done</Link>
    </div>
  )
}

export default Great
