import Typography from '../Components/Typography/Typography'
import BackNav from '../Components/BackNav/BackNav'

const About = () => (
  <div>
    <BackNav route={{ name: 'Back' }} />
    <Typography variant="h2">What is Starting strength?</Typography>
    <Typography>
      Starting Strength is a workout program that gives you the most value for
      time spent in the gym.
    </Typography>
    <Typography>
      It is used by both beginners and experienced weight lifters and consist of
      five exercises and each workout is made up of three of them.
    </Typography>

    <Typography>
      You should do three workouts each week, alternating the variants each
      time.
    </Typography>

    <Typography>
      After one week you raise 2.5kg on all of the exercises, so start out on a
      low weight, over time you will get stronger and be able to lift more.
    </Typography>

    <Typography>Dont forget to warm up with lower weights!</Typography>
  </div>
)

export default About
