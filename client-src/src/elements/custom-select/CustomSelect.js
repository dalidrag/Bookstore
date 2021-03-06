import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CustomSelect.scss";
import { withOutsideClick } from "../../HOCs/outside-click/withOutsideClick";

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

  arrayOfOptionsRefs = [];

  setOptionRef = element => {
    if (element !== null) {
      this.arrayOfOptionsRefs.push(element);
    }
  };

  clearOptionsRefs = () => {
    this.arrayOfOptionsRefs = [];
  };

  currentOptionIndex = 0;

  handleOptionsOnMouseOver = (e, index) => {
    this.arrayOfOptionsRefs[index].focus();
    if (index !== this.currentOptionIndex) {
      this.arrayOfOptionsRefs[this.currentOptionIndex].blur();
      this.currentOptionIndex = index;
    }
  };

  handleOptionsOnKeyDown = (e, index, value) => {
    e.preventDefault();
    const len = this.arrayOfOptionsRefs.length - 1;
    switch (e.key) {
      case "Enter":
      case " ":
        this.toggleDropDown();
        this.props.onChange(value);
        break;
      case "Escape":
        this.toggleDropDown();
        this.currentOptionIndex = 0;
        break;
      case "ArrowUp":
        if (index > 0) {
          let nextIndex = index - 1;
          this.arrayOfOptionsRefs[nextIndex].focus();
          this.currentOptionIndex = nextIndex;
          this.arrayOfOptionsRefs[index].blur();
        }
        break;
      case "ArrowDown":
        if (len > index) {
          let previousIndex = index + 1;
          this.arrayOfOptionsRefs[previousIndex].focus();
          this.arrayOfOptionsRefs[this.currentOptionIndex].blur();
          this.currentOptionIndex = previousIndex;
        }
        break;
      default:
        return;
    }
  };

  toggleDropDown = e => {
    this.setState(
      state => ({ isActive: !state.isActive }),
      () => {
        if (this.state.isActive) {
          this.arrayOfOptionsRefs[this.currentOptionIndex].focus();
          return;
        }
        this.clearOptionsRefs();
        this.clickOutsideRef.current.focus();
      }
    );
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
    this.setState(
      {
        isActive: false
      },
      () => this.clearOptionsRefs()
    );
    return false;
  };

  render() {
    const { label, value, children, className, onChange } = this.props;

    const options = React.Children.toArray(children);
    const selectedOption = this.getSelectedOption(value, options);
    const selectedValue =
      selectedOption && selectedOption.props && selectedOption.props.value;
    const updatedChildren = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        onChange,
        selectedValue,
        setOptionRef: this.setOptionRef,
        handleOptionsOnMouseOver: this.handleOptionsOnMouseOver,
        index,
        handleOptionsOnKeyDown: this.handleOptionsOnKeyDown
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
