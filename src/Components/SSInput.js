import "./SSInput.css";

const SSInput = ({ weight, onChange }) => {
  return (
    <input
      className="SSInput"
      value={weight}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

export default SSInput;
