import "./_colors.css";
import "./styles.css";
import { WorkoutProvider } from "./Context/workout-context";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import SiteHeader from "./Components/SiteHeader/SiteHeader";

const App = () => (
  <div className="App-container">
    <Router>
      <WorkoutProvider>
        <SiteHeader />
        <Routes />
      </WorkoutProvider>
    </Router>
  </div>
);

export default App;
