import { useState } from 'react'
import './WorkoutForm.css'
import SSButton from '../SSButton/SSButton'
import SSInput from '../SSInput/SSInput'
import save from './WorkoutForm-save-icon.svg'
import cancel from './WorkoutForm-cancel-icon.svg'

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
          type="button"
          className="WorkoutForm-form-button WorkoutForm-button-cancel"
          onClick={() => window.history.back()}
        >
          <span>
            Cancel
            <img
              className="WorkoutForm-cancel-icon"
              alt="cancel"
              src={cancel}
            />
          </span>
        </button>
        <button
          type="submit"
          className="WorkoutForm-form-button WorkoutForm-button-save"
        >
          <span className="WorkoutForm-save-icon">
            Save & Continue{' '}
            <img className="WorkoutForm-save-icon" alt="save" src={save} />
          </span>
        </button>
      </div>
    </form>
  )
}

export default WorkoutForm

//weight: {updatedWeight}
