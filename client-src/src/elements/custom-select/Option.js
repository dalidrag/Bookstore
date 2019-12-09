import React from "react";
import PropTypes from "prop-types";
import "./Option.scss";

const Option = ({
  children,
  label,
  value,
  className,
  onChange,
  selectedValue
}) => {
  const optionValue = value || label;
  const isOptionSelected = selectedValue === optionValue;

  const handleClick = () => {
    if (typeof onChange === "function") {
      onChange(optionValue);
    }
  };

  return (
    <li
      tabIndex="0"
      className={`bs-c-custom-select-item ${
        isOptionSelected ? "bs-c-custom-select-item--is-active" : ""
      } ${className || ""}`}
      onClick={handleClick}
    >
      {children || label}
    </li>
  );
};

Option.propTypes = {
  label: PropTypes.node,
  value: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Option.defaultProps = {
  label: null,
  value: null,
  className: null,
  onChange: null
};

export default Option;
