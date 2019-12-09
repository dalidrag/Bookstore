import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomSelect from "../elements/custom-select/CustomSelect";
import "./ProfileView.scss";

class ProfileView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <CustomSelect label="Sort by" className="bs-c-select-widget-container">
        <p>Click A</p>
        <p>Click B</p>
        <p>Click C</p>
      </CustomSelect>
    );
  }
}

ProfileView.propTypes = {};

export default ProfileView;
