import { createContext, useState, useContext } from "react";

const initialState = [
  [
    { name: "squats", state: "" },
    { name: "press", state: "" },
    { name: "pull", state: "" },
  ],
  [
    { name: "squats", state: "" },
    { name: "deadlift", state: "" },
    { name: "bench", state: "" },
  ],
];

const WorkoutsContext = createContext();

function WorkoutsProvider({ children }) {
  // State
  const [workouts, setWorkouts] = useState(
    localStorage.getItem("pass") !== null
      ? JSON.parse(localStorage.getItem("pass"))
      : initialState
  );

  // @Todo
  // update this to be smarter
  function updateWorkouts(name, type) {
    const updatedWorkouts =
      type === "a"
        ? [
            workouts[0].map((workout) => {
              if (name === workout.name) {
                return {
                  ...workout,
                  state: "WORKOUT_DONE",
                };
              }

              return workout;
            }),
            workouts[1],
          ]
        : [
            workouts[0],
            workouts[1].map((workout) => {
              if (name === workout.name) {
                return {
                  ...workout,
                  state: "WORKOUT_DONE",
                };
              }

              return workout;
            }),
          ];

    const typeToIndex = type === "a" ? 0 : 1;
    const finishedOfType = updatedWorkouts[typeToIndex].filter(
      (el) => el.state === "WORKOUT_DONE"
    ).length;

    setWorkouts(updatedWorkouts);
    localStorage.setItem("pass", JSON.stringify(updatedWorkouts));
  }

  const reset = () => {
    setWorkouts(initialState);
    localStorage.setItem("pass", JSON.stringify(initialState));
  };

  const value = { workouts, updateWorkouts, reset };
  return (
    <WorkoutsContext.Provider value={value}>
      {children}
    </WorkoutsContext.Provider>
  );
}

function useWorkoutInfo() {
  const context = useContext(WorkoutsContext);

  if (context === undefined) {
    throw new Error("useWorkout must be used within a WorkoutsProvider!");
  }

  return context.workouts;
}

function useUpdateWorkoutInfo() {
  const context = useContext(WorkoutsContext);

  if (context === undefined) {
    throw new Error("useUpdateWorkout must be used within a WorkoutProvider!");
  }

  return context;
}

function useReset() {
  const context = useContext(WorkoutsContext);

  if (context === undefined) {
    throw new Error("useUpdateWorkout must be used within a WorkoutProvider!");
  }

  return context;
}

export { WorkoutsProvider, useWorkoutInfo, useUpdateWorkoutInfo, useReset };
