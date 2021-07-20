import "./SSButton.css";

const SSButton = ({ children, onClick }) => {
  return (
    <button className="SSButton" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SSButton;
