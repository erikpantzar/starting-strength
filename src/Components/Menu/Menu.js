import './Menu.css'
import { useState } from 'react'

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
        className={[
          'Menu-Toggler',
          (open && 'Menu-Toggler--active': null),
        ].join(' ')}
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
          <h2>What is Starting strength?</h2>
          <p>
            A workout program to get you started with basic exercises and get
            stronger!
          </p>
        </article>
      </nav>
    </>
  )
}

export default Menu
