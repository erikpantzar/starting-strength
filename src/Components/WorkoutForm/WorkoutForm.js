import { useState } from 'react'
import './WorkoutForm.css'
import SSButton from '../SSButton/SSButton'
import SSInput from '../SSInput/SSInput'
import SaveButton from '../SaveButton/SaveButton.js'
import CancelButton from '../CancelButton/CancelButton'

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
        <CancelButton />
        <SaveButton />
      </div>
    </form>
  )
}

export default WorkoutForm

//weight: {updatedWeight}
