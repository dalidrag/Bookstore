import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CarouselSlide.css';

class CarouselSlide extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="bs-c-carousel__slide">
                {this.props.children}
            </div>
        );
    }
}

CarouselSlide.propTypes = {};

export default CarouselSlide;
