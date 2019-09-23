import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';

import './Carousel.css';

class CarouselViewingFrame extends Component {
    static propTypes = {
        setViewingFrameRef: PropTypes.func,
        setCarousel: PropTypes.func,
    };

    static defaultProps = {
        setViewingFrameRef: null,
        setCarousel: null,
    };

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
        const {setViewingFrameRef, setCarousel} = this.props;

        const children = Children.map(this.props.children, child => (typeof child === 'string' ? child
            : React.cloneElement(child, {
                setCarousel: setCarousel,
            })));

        return (
            <div className="bs-c-carousel__viewing-frame" ref={setViewingFrameRef}>
                {children}
            </div>
        );
    }
}

CarouselViewingFrame.propTypes = {};

export default CarouselViewingFrame;
