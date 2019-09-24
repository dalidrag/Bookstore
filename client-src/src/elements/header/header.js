import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="bs-c-header">
                <div className="bs-c-header__logo" />
                <nav className="bs-c-header__main-menu">
                    <a href="#">Categories</a>
                    <a href="#">Favorites</a>
                    <a href="#">Profile</a>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
