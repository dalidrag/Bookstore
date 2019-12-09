import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CustomSelect.scss";
import { withOutsideClick } from "../../HOCs/withOutsideClick";

@withOutsideClick
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

  clickOutsideRef = React.createRef();

  toggleDropDown = e => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  getSelectedOption = (value, options = []) => {
    if (options.length > 0) {
      // selected option
      const selectedOption = options.find(
        option => option.props && option.props.value === value
      );
      if (selectedOption) {
        return selectedOption;
      }
      // default option
      const defaultOption = options.find(
        option => option.props && option.props.isDefault
      );
      if (defaultOption) {
        return defaultOption;
      }
      // first option
      return options[0];
    }
  };

  componentDidMount() {
    this.props.subscribeToClickOutside(
      this.clickOutsideRef,
      this.onClickOutside
    );
  }

  componentWillUnmount() {
    this.props.unsubscribeFromClickOutside(
      this.clickOutsideRef,
      this.onClickOutside
    );
  }

  onClickOutside = () => {
    this.setState({
      isActive: false
    });
    return false;
  };

  render() {
    const { label, value, children, className, onChange } = this.props;

    const options = React.Children.toArray(children);
    const selectedOption = this.getSelectedOption(value, options);
    const selectedValue =
      selectedOption && selectedOption.props && selectedOption.props.value;
    const updatedChildren = React.Children.map(children, child =>
      React.cloneElement(child, {
        onChange,
        selectedValue
      })
    );

    return (
      <div
        onClick={this.toggleDropDown}
        ref={this.clickOutsideRef}
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
