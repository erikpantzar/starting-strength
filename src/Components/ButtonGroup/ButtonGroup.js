import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonGroup.css'
import arrowBlack from './wide-arrow-black.svg'

// const links = [{ text, url }]
const ButtonGroup = ({ links }) => (
  <nav className="ButtonGroup">
    {links.map((link, index) => (
      <Link key={link.text} className="ButtonGroup-link" to={link.url}>
        <span className="ButtonGroup-text">{link.text}</span>
        <div className="ButtonGroup-arrow">
          <img alt="arrow" src={arrowBlack} />
        </div>
      </Link>
    ))}
  </nav>
)

export default ButtonGroup
