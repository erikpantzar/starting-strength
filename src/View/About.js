import Typography from '../Components/Typography/Typography'
import BackNav from '../Components/BackNav/BackNav'

const About = () => (
  <div>
    <BackNav route={{ name: 'Back' }} />
    <Typography>
      Starting Strength is a workout program that gives you the most value for
      time spent in the gym. It is used by both It consist of 5 exercises and
      each workout is made up of three of them. You should do 3 workouts each
      week, alternating the variants each time. After one week you raise 2.5kg
      on all of the exercises, so start out on a low weight, over time you will
      get stronger and be able to lift more. Dont forget to warm up with lower
      weights!
    </Typography>
  </div>
)

export default About
