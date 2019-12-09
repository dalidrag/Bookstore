import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomSelect from "../elements/custom-select/CustomSelect";
import "./ProfileView.scss";
import Option from "../elements/custom-select/Option";

class ProfileView extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    chosenCountry: "Choose country"
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  putChosenCountry = value => {
    this.setState({
      chosenCountry: value
    });
  };

  render() {
    return (
      <CustomSelect
        label="Your Country"
        className="bs-c-select-widget-container"
        value={this.state.chosenCountry}
        onChange={this.putChosenCountry}
      >
        <Option value="A">Click A</Option>
        <Option value="B">Click B</Option>
        <Option value="C">Click C</Option>
      </CustomSelect>
    );
  }
}

ProfileView.propTypes = {};

export default ProfileView;
