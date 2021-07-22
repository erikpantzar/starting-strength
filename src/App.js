import "./styles.css";
import { WorkoutProvider } from "./Context/workout-context";
import Routes from "./Routes";

const App = () => (
  <div className="App-container">
    <WorkoutProvider>
      <Routes />
    </WorkoutProvider>
  </div>
);

export default App;
