import ButtonGroup from "../Components/ButtonGroup/ButtonGroup";

const workouts = [
  {
    text: "Variant A",
    url: "workout/a",
  },

  {
    text: "Variant B",
    url: "workout/b",
  },
];

const Home = () => (
  <div>
    <ButtonGroup links={workouts} />
  </div>
);

export default Home;
