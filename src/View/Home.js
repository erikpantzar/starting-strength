import ButtonGroup from '../Components/ButtonGroup/ButtonGroup'
import Typography from '../Components/Typography/Typography'

const workouts = [
  {
    text: 'Variant A',
    url: 'workout/a',
  },

  {
    text: 'Variant B',
    url: 'workout/b',
  },
]

const Home = () => (
  <div>
    <Typography variant="h1">
      To get started, pick the variant of workout you would like to do today.
    </Typography>

    <ButtonGroup links={workouts} />
  </div>
)

export default Home
