import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {throttle} from 'lodash';

import CarouselPagination from './CarouselPagination';
import CarouselControls from './CarouselControls';
import CarouselViewingFrame from './CarouselViewingFrame';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.setCarousel = throttle(this.setCarousel, 650);
    }

    state = {
        carouselPages: [],
        slideTrayOffset: 0,
        currentPage: 0,
    };

    componentDidMount() {
        window.addEventListener('resize', this.setCarousel);
    }


    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setCarousel);
        this.setState({
            carouselPages: [],
            slideTrayOffset: 0,
            currentPage: 0,
        });
    }

    viewingFrameRef = null;

    /**
     * Sets ref to viewingFrame DOM node
     *
     * @param element
     */
    setViewingFrameRef = element => {
        this.viewingFrameRef = element;
    };

    setCarousel = () => {
        const carouselPages = this.getCarouselPages();
        if (carouselPages.length === 0) {
            this.setState({
                carouselPages: carouselPages,
                slideTrayOffset: 0,
                currentPage: 0,
            });
            return;
        }

        this.setState(state => ({
            carouselPages: carouselPages,
            slideTrayOffset: carouselPages[state.currentPage].x * -1,
            ...(state.currentPage > carouselPages.length - 1 && {
                currentPage: carouselPages.length - 1,
                slideTrayOffset: carouselPages[carouselPages.length - 1].x * -1,
            }),
        }));
    };

    /**
     * Calculates carousel pages for given viewing frame and set of slides and their widths
     */
    getCarouselPages = () => {
        if (!this.viewingFrameRef) return [];

        const slideNodeList = this.viewingFrameRef.querySelectorAll('.js-carousel-slide');
        const viewingFrameRect = this.viewingFrameRef.getBoundingClientRect();
        const slideNodeRectList = [];
        Array.prototype.forEach.call(slideNodeList, slideNode => {
            return slideNodeRectList.push(slideNode.getBoundingClientRect());
        });
        const slideTrayWidth = slideNodeRectList
            .reduce((slideTrayWidth, slideNodeRect) => slideTrayWidth + slideNodeRect.width, 0);

        return slideNodeRectList.reduce((carouselPages, slideNodeRect, index) => {
            if (carouselPages.length === 0) carouselPages.push({id: 0, x: 0, slidesWidth: 0});

            const page = carouselPages[carouselPages.length - 1];

            if (page.slidesWidth + slideNodeRect.width <= viewingFrameRect.width) {
                page.slidesWidth += slideNodeRect.width;
            } else {
                const newPage = {
                    id: page.id + 1,
                    x: page.x + page.slidesWidth,
                    slidesWidth: slideNodeRect.width,
                };
                carouselPages.push(newPage);
            }

            if (index === slideNodeRectList.length - 1 && carouselPages.length > 1) {
                const lastPage = carouselPages[carouselPages.length - 1];
                carouselPages[carouselPages.length - 1] = {
                    id: lastPage.id,
                    x: slideTrayWidth - viewingFrameRect.width,
                    slidesWidth: lastPage.slidesWidth,
                };
            }

            return carouselPages;
        }, []);
    };

    /**
     * Rotates carousel one page left
     */
    rotateCarouselLeft = () => {
        const {carouselPages} = this.state;
        if (carouselPages.length === 0 || this.state.currentPage === 0) return;

        this.setState(state => ({
            currentPage: state.currentPage - 1,
            slideTrayOffset: carouselPages[state.currentPage - 1].x * -1,
        }));
    };

    /**
     * Rotates carousel one page right
     */
    rotateCarouselRight = () => {
        const {carouselPages} = this.state;
        if (carouselPages.length === 0 || this.state.currentPage === carouselPages.length - 1) return;

        this.setState(state => ({
            currentPage: state.currentPage + 1,
            slideTrayOffset: carouselPages[state.currentPage + 1].x * -1,
        }));
    };

    render() {
        return (
            <div className="bs-c-carousel">
                <CarouselPagination />
                <CarouselViewingFrame
                    setViewingFrameRef={this.setViewingFrameRef}
                    setCarousel={this.setCarousel}
                    slideTrayOffset={this.state.slideTrayOffset}
                >
                    {this.props.children}
                </CarouselViewingFrame>
                <CarouselControls
                    currentPage={this.state.currentPage}
                    carouselPages={this.state.carouselPages}
                    rotateCarouselLeft={this.rotateCarouselLeft}
                    rotateCarouselRight={this.rotateCarouselRight}
                />
            </div>
        );
    }
}

Carousel.propTypes = {};

export default Carousel;
