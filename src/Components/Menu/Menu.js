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
          <Link className="navLink" to="/about" onClick={() => setOpen(false)}>
            <Typography variant="h2">What is Starting strength?</Typography>
            <Typography>
              Starting Strength is a workout program that gives you the most
              value for time spent in the gym.
            </Typography>
            Read more >>>
            {/* Placeholder til we figure out a nice design for link */}
          </Link>
          <Link className="navLink" to="/info" onClick={() => setOpen(false)}>
            <Typography variant="h2">What are the exercises?</Typography>
            <Typography>
              Here you can read more about the variants and the different
              exercises.
            </Typography>
            Read More >>>
          </Link>
        </article>
      </nav>
    </>
  )
}

export default Toggler
