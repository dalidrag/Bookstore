import React from "react";
import PropTypes from "prop-types";
import "./Option.scss";

const Option = ({ children, label, className }) => {
  return (
    <li tabIndex="0" className={`bs-c-custom-select-item ${className || ""}`}>
      {children || label}
    </li>
  );
};

Option.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string
};

Option.defaultProps = {
  label: null,
  className: null
};

export default Option;
