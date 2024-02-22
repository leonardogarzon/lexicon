const Subtitlecontrol = ({ subtitle, children }) => {
  return (
    <h3 className="autofit-row sheet-subtitle">
      <span className="autofit-col autofit-col-expand">
        <span className="heading-text">{subtitle}</span>
      </span>
      <span className="autofit-col">
        <span className="heading-end">{children}</span>
      </span>
    </h3>
  );
};


export default Subtitlecontrol;