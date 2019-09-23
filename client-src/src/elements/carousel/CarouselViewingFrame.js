import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./Carousel.css";

class CarouselViewingFrame extends Component {
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
            <div className="bs-c-carousel__viewing-frame">
                {this.props.children}
            </div>
        );
    }
}

CarouselViewingFrame.propTypes = {};

export default CarouselViewingFrame;
