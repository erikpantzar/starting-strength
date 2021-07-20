import "./SSHeader.css";

const SSHeader = ({ workout, details, historicWeight }) => (
  <header className="SSheader">
    <div className="SSHeader-separator">
      <h1 className="SSHeader-title">{workout}</h1>{" "}
      <span className="SSHeader-details">{details}</span>
    </div>
    <div className="SSHeader-bottom">
      <h3 className="SSHeader-action">Submit this weeks working weight</h3>
      <p className="SSHeader-history">
        <span className="SSHeader-text">Last week </span>
        {historicWeight}
      </p>
    </div>
  </header>
);

export default SSHeader;
