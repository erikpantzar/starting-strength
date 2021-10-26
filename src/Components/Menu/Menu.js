import './Menu.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Typography from '../Typography/Typography'

export const Menu = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className={['Menu-backdrop', open && 'Menu--isOpen'].join(' ')}
        onClick={() => setOpen(!open)}
      />
      <button
        type="button"
        onClick={() => handleToggle()}
        className={['Menu-Toggler', open && 'Menu-Toggler--active'].join(' ')}
      >
        II
      </button>
      <nav
        className={[
          'Menu-nav',
          open ? 'Menu-nav--isOpen' : 'Menu-nav--isClosed',
        ].join(' ')}
      >
        <article>
          <Link
            className="Menu-link"
            to="/about"
            onClick={() => setOpen(false)}
          >
            <Typography variant="h2">What is Starting strength?</Typography>
            <Typography>
              Starting Strength is a workout program that gives you the most
              value for time spent in the gym.
            </Typography>
            Read more >>>
            {/* Placeholder til we figure out a nice design for link */}
          </Link>
          <Link className="Menu-link" to="/info" onClick={() => setOpen(false)}>
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

export default Menu
