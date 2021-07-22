import { useState } from "react";
import "./WorkoutForm.css";
import SSButton from "./SSButton";
import SSInput from "./SSInput";
// Todo
// 1. set weight to localState variable called updatedWeight
// 2. function to change value of updatedWieght
// 3. get Save button to trigger onSubmit method with excercise and value
// 4. put updatedValue in input as defaultValue
// 5. make it pretty (flexbox ffs)

const WorkoutForm = ({ excercise, weight, onSubmit }) => {
  // console.log({ excercise, weight, onSubmit });
  // magical destructuring

  const [updatedWeight, setUpdatedWeight] = useState(weight);

  // gets modifier to change the local variable with
  const changeWeight = (value) => {
    setUpdatedWeight(parseFloat(updatedWeight) + value);
  };

  const handleSubmit = () => {
    // if all, good submit
    onSubmit(excercise, updatedWeight);
  };

  return (
    <form
      className="container"
      onSubmit={(event) => {
        event.preventDefault(event);
        handleSubmit();
      }}
    >
      <div className="values">
        <SSButton onClick={() => changeWeight(-5)}>-5</SSButton>
        <SSButton onClick={() => changeWeight(-2.5)}>-2.5</SSButton>
        <SSInput weight={updatedWeight} onChange={setUpdatedWeight} />
        <SSButton onClick={() => changeWeight(2.5)}>+2.5</SSButton>
        <SSButton onClick={() => changeWeight(5)}>+5</SSButton>
      </div>

      <button type="submit" className="form-button button-primary">
        Save
      </button>
      <button
        className="form-button button-ghost"
        onClick={window.history.back}
      >
        Cancel
      </button>
    </form>
  );
};

export default WorkoutForm;

//weight: {updatedWeight}
