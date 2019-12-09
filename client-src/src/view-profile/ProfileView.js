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

  render() {
    return (
      <CustomSelect
        label="Sort by"
        className="bs-c-select-widget-container"
        value={this.state.chosenCountry}
      >
        <Option>Click A</Option>
        <Option>Click B</Option>
        <Option>Click C</Option>
      </CustomSelect>
    );
  }
}

ProfileView.propTypes = {};

export default ProfileView;
