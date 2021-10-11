import { createContext, useState, useContext } from "react";

// TODO
// 1. fetch initall from localStorage || setNewDeafualts
const initialState = {
  bench: 60,
  deadlift: 120,
  squats: 60,
  press: 25,
  pull: 35,
};

const WorkoutContext = createContext();

function WorkoutProvider({ children }) {
  // State
  const [workouts, setWorkouts] = useState(
    // Check if there are previous workouts
    // if previous workouts use them
    // otherwise go with initialState
    localStorage.getItem("workouts") !== null
      ? JSON.parse(localStorage.getItem("workouts"))
      : initialState
  );

  function handleWorkout(workout, value) {
    const updated = { ...workouts, [workout]: value };
    setWorkouts(updated);
    localStorage.setItem("workouts", JSON.stringify(updated));
  }

  const value = { workouts, handleWorkout };
  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

function useWorkout() {
  const context = useContext(WorkoutContext);

  if (context === undefined) {
    throw new Error("useWorkout must be used within a WorkoutProvider!");
  }

  return context.workouts;
}

function useUpdateWorkout() {
  const context = useContext(WorkoutContext);

  if (context === undefined) {
    throw new Error("useUpdateWorkout must be used within a WorkoutProvider!");
  }

  return context;
}

function useResetWorkout() {
  localStorage.clear();
  console.log("Cleared localStorage");
}

export { WorkoutProvider, useWorkout, useUpdateWorkout, useResetWorkout };

// example
// 1. read values
// import { useWorkout } from workoutContext
// 2. extract the value you want for the excercise
// const { bench } = useWorkout();
// 3. display value in template
// <div>{bench}</div>

// example
// 1. write to context
// import { useUpdateWorkout } from workoutContext
// 2. make the update feature available
// const { handleWorkout } = useUpdateWorkout();
// 3. call it
// const handleUpdate = () => {
//   handleWorkout("deadlift", 70);
// };
