import React from "react";
import PropTypes from "prop-types";
import "./Option.scss";

const Option = ({
  children,
  label,
  value,
  className,
  onChange,
  selectedValue,
  setOptionRef,
  index,
  handleOptionsOnMouseOver,
  handleOptionsOnKeyDown
}) => {
  const optionValue = value || label;
  const isOptionSelected = selectedValue === optionValue;

  const handleClick = () => {
    if (typeof onChange === "function") {
      onChange(optionValue);
    }
  };

  const handleMouseOver = e => {
    if (typeof handleOptionsOnMouseOver === "function") {
      handleOptionsOnMouseOver(e, index);
    }
  };

  const handleKeyDown = e => {
    if (typeof handleOptionsOnKeyDown === "function") {
      handleOptionsOnKeyDown(e, index, optionValue);
    }
  };

  return (
    <li
      tabIndex="0"
      className={`bs-c-custom-select-item ${
        isOptionSelected ? "bs-c-custom-select-item--is-active" : ""
      } ${className || ""}`}
      onClick={handleClick}
      ref={setOptionRef}
      onMouseOver={handleMouseOver}
      onKeyDown={handleKeyDown}
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
