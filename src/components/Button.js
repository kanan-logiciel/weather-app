import PropTypes from "prop-types";

const Button = (props) => {
  const { className = "", children, disabled = false, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      className={`btn ${
        disabled ? "btn-secondary" : "btn-primary"
      } ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
