import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CarouselPagination from './CarouselPagination';
import CarouselControls from './CarouselControls';
import CarouselViewingFrame from './CarouselViewingFrame';

class Carousel extends Component {
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
            <div className="bs-c-carousel">
                <CarouselPagination />
                <CarouselViewingFrame>
                    {this.props.children}
                </CarouselViewingFrame>
                <CarouselControls />
            </div>
        );
    }
}

Carousel.propTypes = {};

export default Carousel;
