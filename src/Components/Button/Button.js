import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({
  variant = 'default',
  type = 'button',
  to = '',
  onClick,
  children,
}) => {
  const getButtonVariant = () => {
    switch (variant) {
      case 'summary':
        return 'Button Button-summary'
      case 'reset':
        return 'Button Button-reset'
      case 'track-a':
        return 'Button Button-track-a'
      case 'track-b':
        return 'Button Button-track-b'
      case 'default':
      default:
        return 'Button'
    }
  }

  const buttonVariant = getButtonVariant()

  if (to.length > 0) {
    return (
      <Link className={buttonVariant} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={buttonVariant}>
      {children}
    </button>
  )
}

export default Button
