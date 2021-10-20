import './Menu.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        className={['Toggler', open && 'Toggler--active'].join(' ')}
      >
        II
      </button>
      <nav
        className={['nav', open ? 'nav--isOpen' : 'nav--isClosed'].join(' ')}
      >
        <article>
          <Typography variant="h2">What is Starting strength?</Typography>
          <Typography>
            Starting Strength is a workout program that gives you the most value
            for time spent in the gym.
          </Typography>
          <Link className="navLink" to="/about" onClick={() => setOpen(false)}>
            Read More
          </Link>
          <Typography variant="h2">How does this app work?</Typography>
          <Typography>
            Each time you go to the gym, you choose wich variant you should do.
            Remember it is not supposed to be the same as the last time you
            worked out.
          </Typography>
          <Link
            className="navLink"
            to="/tutorial"
            onClick={() => setOpen(false)}
          >
            Read More
          </Link>
        </article>
      </nav>
    </>
  )
}

export default Toggler
