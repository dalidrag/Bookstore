import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CarouselSlide.css';

class CarouselSlide extends Component {
    static propTypes = {
        setCarousel: PropTypes.func,
    };

    static defaultProps = {
        setCarousel: null,
    };

    componentDidMount() {
        this.props.setCarousel();
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.focused) {
            this.slideRef.current.focus();
        }
    }

    componentWillUnmount() {

    }

    slideRef = React.createRef();

    render() {
        return (
            <div className="bs-c-carousel__slide js-carousel-slide" tabIndex="-1" ref={this.slideRef}>
                {this.props.children}
            </div>
        );
    }
}

CarouselSlide.propTypes = {};

export default CarouselSlide;
