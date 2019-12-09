import React from "react";
import PropTypes from "prop-types";
import "./Option.scss";

const Option = ({ children, label, className, onChange }) => {
  const optionValue = label;

  const handleClick = () => {
    if (typeof onChange === "function") {
      onChange(optionValue);
    }
  };

  return (
    <li
      tabIndex="0"
      className={`bs-c-custom-select-item ${className || ""}`}
      onClick={handleClick}
    >
      {children || label}
    </li>
  );
};

Option.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Option.defaultProps = {
  label: null,
  className: null,
  onChange: null
};

export default Option;
