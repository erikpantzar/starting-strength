import './SSInput.css'

const SSInput = ({ weight, onChange }) => {
  return (
    <div className="SSInput-wrapper">
      <input
        className="SSInput"
        value={weight}
        onChange={(event) => {
          onChange(event.target.value)
        }}
      />
      <p>kg</p>
    </div>
  )
}

export default SSInput
