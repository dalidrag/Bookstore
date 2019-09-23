import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';

import './Carousel.css';

class CarouselViewingFrame extends Component {
    static propTypes = {
        setViewingFrameRef: PropTypes.func,
        setCarousel: PropTypes.func,
        slideTrayOffset: PropTypes.number,
    };

    static defaultProps = {
        setViewingFrameRef: null,
        setCarousel: null,
        slideTrayOffset: 0,
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
        const {setViewingFrameRef, setCarousel, slideTrayOffset} = this.props;

        const children = Children.map(this.props.children, child => (typeof child === 'string' ? child
            : React.cloneElement(child, {
                setCarousel: setCarousel,
            })));

        const slideTrayStyle = {
            transform: `translateX(${slideTrayOffset}px)`,
        };

        return (
            <div className="bs-c-carousel__viewing-frame" ref={setViewingFrameRef}>
                <div className="bs-c-carousel__slide_tray" style={slideTrayStyle}>
                    {children}
                </div>
            </div>
        );
    }
}

CarouselViewingFrame.propTypes = {};

export default CarouselViewingFrame;
