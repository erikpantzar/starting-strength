import React from "react";
import WorkoutItem from "./Item";

export default {
  title: "Workout/Item",
  component: WorkoutItem,
};

const Template = (args) =>  <WorkoutItem 
{...args} />

export const Bench = Template.bind({})
Bench.args = {
  workout: "bench",
  weight: 90,
  details: "3 sets of 12"
}