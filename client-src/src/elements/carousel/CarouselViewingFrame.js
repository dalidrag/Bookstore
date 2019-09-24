import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';

import './Carousel.css';

class CarouselViewingFrame extends Component {
    static propTypes = {
        setViewingFrameRef: PropTypes.func,
        setCarousel: PropTypes.func,
        slideTrayOffset: PropTypes.number,
        slideTrayFirstIndex: PropTypes.number,
    };

    static defaultProps = {
        setViewingFrameRef: null,
        setCarousel: null,
        slideTrayOffset: 0,
        slideTrayFirstIndex: 0,
    };

    state = {
        focusedSlideIndex: -1,
    };

    componentWillMount() {

    }

    componentDidMount() {
        window.addEventListener('keydown', this.manageFocus);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.manageFocus);
    }

    manageFocus = event => {
        switch (event.keyCode) {
            case 39: // right arrow
                this.setState({focusedSlideIndex: this.state.focusedSlideIndex + 1});
                break;
            case 37: // left arrow
                this.setState({focusedSlideIndex: this.state.focusedSlideIndex - 1});
                break;
            default:
                return;
        }
    };

    render() {
        const {setViewingFrameRef, setCarousel, slideTrayOffset, slideTrayFirstIndex} = this.props;

        console.log(this.state.focusedSlideIndex + slideTrayFirstIndex);

        const children = Children.map(this.props.children, (child, index) => (typeof child === 'string' ? child
            : React.cloneElement(child, {
                setCarousel: setCarousel,
                focused: this.state.focusedSlideIndex > 0
                    && (this.state.focusedSlideIndex + slideTrayFirstIndex === index),
            })));

        const slideTrayStyle = {
            transform: `translateX(${slideTrayOffset}px)`,
        };

        return (
            <div className="bs-c-carousel__viewing-frame" ref={setViewingFrameRef} tabIndex="0">
                <div className="bs-c-carousel__slide_tray" style={slideTrayStyle}>
                    {children}
                </div>
            </div>
        );
    }
}

CarouselViewingFrame.propTypes = {};

export default CarouselViewingFrame;
