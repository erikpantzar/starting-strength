import React from 'react'
import './Item.css'

const Item = ({ workout, weight, details }) => {
  return (
    <section className="Item">
      <figure className="Item-image-container">
        <img src="" alt="container" />
      </figure>

      <div className="Item-text-container">
        <h2>{weight}kg</h2>
        <p>Was what you worked with most recent</p>
        <h1>
          {workout} ({details})
        </h1>
      </div>
    </section>
  )
}

export default Item
