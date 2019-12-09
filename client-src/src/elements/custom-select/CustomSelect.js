import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CustomSelect.scss";

class CustomSelect extends Component {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    label: null,
    className: null,
    children: null,
    value: null,
    onChange: null
  };

  state = {
    isActive: false
  };

  toggleDropDown = e => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const { label, value, children, className, onChange } = this.props;

    const updatedChildren = React.Children.map(children, child =>
      React.cloneElement(child, {
        onChange
      })
    );

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
            {updatedChildren}
          </ul>
        )}
      </div>
    );
  }
}

export default CustomSelect;
