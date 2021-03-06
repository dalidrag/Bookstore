import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.switchHeaderMode);
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  switchHeaderMode = () => {
    const scrollPosition = Math.round(window.scrollY);
    const header = document.querySelector(".js-sticky-header");
    const headerWrapper = document.querySelector(".js-sticky-header-wrapper");

    if (!headerWrapper) {
      return;
    }
    if (scrollPosition > 1) {
      header.classList.add("is-detached");
      headerWrapper.classList.add("is-detached");
    } else {
      header.classList.remove("is-detached");
      headerWrapper.classList.remove("is-detached");
    }
  };

  render() {
    return (
      <div className="bs-c-header-wrapper js-sticky-header-wrapper">
        <div className="bs-c-header js-sticky-header">
          <div className="bs-c-header__logo" />
          <nav className="bs-c-header__main-menu">
            <Link to="/category/Fiction">Categories</Link>
            <a href="#">Favorites</a>
            <Link to="/profile">Profile</Link>
          </nav>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
