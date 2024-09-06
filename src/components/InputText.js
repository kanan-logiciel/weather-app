import PropTypes from "prop-types";

const TextInput = (props) => {
  const { className = "", label, id, ...restProps } = props;

  return (
    <div className="mb-3 d-flex">
      <label htmlFor={id} className="form-label" style={{ width: "30%" }}>
        {label}
      </label>
      <input className={`form-control ${className}`} id={id} {...restProps} />
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
