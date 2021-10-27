import Typography from '../Components/Typography/Typography'
import BackNav from '../Components/BackNav/BackNav'

const Info = () => (
  <div>
    <BackNav route={{ name: 'Back' }} />
    <Typography variant="h2">Variant A:</Typography>
    <Typography>
      <a
        target="blank_"
        href="https://www.jefit.com/exercises/1223/Barbell-Deep-Squat"
      >
        Barbell back squat
      </a>
      <br />
      <a
        target="blank_"
        href="https://www.jefit.com/exercises/93/Barbell-Deadlift"
      >
        Deadlift
      </a>
      <br />
      <a
        target="blank_"
        href="https://www.jefit.com/exercises/2/Barbell-Bench-Press"
      >
        Bench press
      </a>
    </Typography>
    <Typography variant="h2">Variant B:</Typography>
    <Typography>
      <a
        target="blank_"
        href="https://www.jefit.com/exercises/1223/Barbell-Deep-Squat"
      >
        Barbell back squat
      </a>
      <br />
      <a
        target="blank_"
        href="https://www.jefit.com/exercises/453/Barbell-Standing-Military-Press"
      >
        Overhead Press
      </a>
      <br />
      <a
        target="blank_"
        href="https://www.jefit.com/exercises/86/Wide-Grip-Lat-Pulldown"
      >
        Lat pulldown
      </a>
    </Typography>
  </div>
)

export default Info
