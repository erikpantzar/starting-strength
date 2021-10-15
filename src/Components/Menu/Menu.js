import './Menu.css'
import { useState } from 'react'
import Typography from '../Typography/Typography'

export const Toggler = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className={['Nav-backdrop', open && 'nav--isOpen'].join(' ')}
        onClick={() => setOpen(!open)}
      />
      <button
        type="button"
        onClick={() => handleToggle()}
        className={['Toggler', (open && 'Toggler--active': null)].join(' ')}
      >
        II
      </button>
      <nav
        className={['nav', open ? 'nav--isOpen' : 'nav--isClosed'].join(' ')}
      >
        <article>
          <Typography variant="h2">What is Starting strength?</Typography>
          <Typography>
            Starting Strenght is a workout program that gives you the most value
            for time spent in the gym. It is used by both It consist of 5
            exercises and each workout is made up of three of them. You should
            do 3 workouts each week, alternating the variants each time. After
            one week you raise 2.5kg on all of the exercises, so start out on a
            low weight, over time you will get stronger and be able to lift
            more. Dont forget to warm up with lower weights!
          </Typography>
          <Typography variant="h2">How does this app work?</Typography>
          <Typography>
            Each time you go to the gym, you choose wich variant you should do.
            Remember it is not supposed to be the same as the last time you
            worked out. After you have done your exercise and marked up what
            weight you used, press the save button. When all 3 workouts are
            done, you will get a summary, then you can close the app and the
            next time you are at the gym just repeat these steps and the last
            weights you did will show in the center so you can keep track of
            what weight you should use this time.
          </Typography>
        </article>
      </nav>
    </>
  )
}

export default Toggler
