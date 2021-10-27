import './SSInput.css'
import { WORKOUTS_SET_AND_REPS } from '../../contants.js'
import { useParams } from 'react-router-dom'

const SSInput = ({ weight, onChange }) => {
  const { workout } = useParams()

  return (
    <div>
      <input
        className="SSInput"
        value={weight}
        onChange={(event) => {
          onChange(event.target.value)
        }}
      />
      <div>{workout}</div>
      <div>
        {WORKOUTS_SET_AND_REPS[workout][0]}x{WORKOUTS_SET_AND_REPS[workout][1]}
      </div>
    </div>
  )
}

export default SSInput
