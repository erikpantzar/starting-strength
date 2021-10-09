import "./_colors.css";
import "./styles.css";
import { WorkoutProvider } from "./Context/workout-context";
import { WorkoutsProvider } from "./Context/pass-context";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import SiteHeader from "./Components/SiteHeader/SiteHeader";

const App = () => (
  <div className="App-container">
    <Router>
      <WorkoutProvider>
        <WorkoutsProvider>
          <SiteHeader />
          <Routes />
        </WorkoutsProvider>
      </WorkoutProvider>
    </Router>
  </div>
);

export default App;
