import Link from "next/link";
import PropTypes from "prop-types";

const LinkButton = (props) => {
  const { className = "", children, ...restProps } = props;

  return (
    <Link className={`btn btn-link ${className}`} {...restProps}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default LinkButton;
