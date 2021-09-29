import ButtonGroup from "./ButtonGroup";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Component/ButtonGroup",
  component: ButtonGroup,
};

const exampleData = [
  { text: "Workout A", url: "/a" },
  { text: "Workout B", url: "/b" },
];
export const example = () => (
  <Router>
    <ButtonGroup links={exampleData} />
  </Router>
);
