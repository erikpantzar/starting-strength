import React from 'react'
import './CancelButton.css'

const CancelButton = () => {
  return (
    <button
      type="button"
      className="WorkoutForm-button-cancel"
      onClick={() => window.history.back()}
    >
      <svg
        className="WorkoutForm-button-cancel-icon"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.1667 5.80475L23.1954 0.833496L14.5 9.52891L5.80459 0.833496L0.833344 5.80475L9.52876 14.5002L0.833344 23.1956L5.80459 28.1668L14.5 19.4714L23.1954 28.1668L28.1667 23.1956L19.4713 14.5002L28.1667 5.80475Z"
          fill="currentColor"
        />
      </svg>
      Cancel
    </button>
  )
}

export default CancelButton
