import { useState } from 'react'
import './WorkoutForm.css'
import SSButton from '../SSButton/SSButton'
import SSInput from '../SSInput/SSInput'
import arrow from './WorkoutForm-arrow.svg'

const WorkoutForm = ({ excercise, weight, onSubmit }) => {
  const [updatedWeight, setUpdatedWeight] = useState(weight)

  // gets modifier to change the local variable with
  const changeWeight = (value) => {
    setUpdatedWeight(parseFloat(updatedWeight) + value)
  }

  const handleSubmit = () => {
    // if all, good submit
    onSubmit(excercise, updatedWeight)
  }

  return (
    <form
      className="WorkoutForm-container"
      onSubmit={(event) => {
        event.preventDefault(event)
        handleSubmit()
      }}
    >
      <div className="WorkoutForm-values">
        <SSButton onClick={() => changeWeight(-2.5)}>-</SSButton>
        <SSInput weight={updatedWeight} onChange={setUpdatedWeight} />
        <SSButton onClick={() => changeWeight(2.5)}>+</SSButton>
      </div>
      <div className="WorkoutForm-buttongroup-style">
        <button
          type="submit"
          className="WorkoutForm-form-button WorkoutForm-button-primary"
        >
          <span className="WorkoutForm-primary-style">
            Save & Continue{' '}
            <img className="WorkoutForm-arrow-icon" alt="arrow" src={arrow} />
          </span>
        </button>
        <button
          type="button"
          className="WorkoutForm-form-button WorkoutForm-button-ghost"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default WorkoutForm

//weight: {updatedWeight}
