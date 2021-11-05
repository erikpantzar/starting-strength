import './SSInput.css'
import { WORKOUTS_SET_AND_REPS } from '../../contants.js'
import { useParams } from 'react-router-dom'

const SSInput = ({ weight, onChange }) => {
  const { workout } = useParams()

  return (
    <div className="SSInput-container">
      <input
        className="SSInput-value SSInput-font"
        value={weight}
        onChange={(event) => {
          onChange(event.target.value)
        }}
      />
      <span
        className="SSInput-workout SSInput-font"
        style={{ textTransform: 'Capitalize' }}
      >
        {workout}
      </span>
      <span className="SSInput-reps SSInput-font">
        {WORKOUTS_SET_AND_REPS[workout][0]}x{WORKOUTS_SET_AND_REPS[workout][1]}
      </span>
    </div>
  )
}

export default SSInput
