import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CustomSelect.scss";

class CustomSelect extends Component {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    label: null,
    className: null,
    children: null,
    value: null
  };

  state = {
    isActive: false
  };

  toggleDropDown = e => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const { label, value, children, className } = this.props;

    return (
      <div
        onClick={this.toggleDropDown}
        className={`bs-c-custom-select ${className || ""}`}
        tabIndex="0"
      >
        {label && <label className="bs-c-custom-select__label">{label}</label>}
        <div className="bs-c-custom-select__field">
          <span className="bs-c-custom-select__field-value">{value}</span>
          <div className="bs-c-custom-select__icon" />
        </div>
        {this.state.isActive && (
          <ul className="bs-c-custom-select__drop-down" tabIndex="0">
            {children}
          </ul>
        )}
      </div>
    );
  }
}

export default CustomSelect;
