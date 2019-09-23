import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

const CarouselControls = props => {
    const {currentPage, carouselPages, rotateCarouselLeft, rotateCarouselRight} = props;

    return (
        <div className="bs-c-carousel__controls">
            {carouselPages.length > 0 && (
                <Fragment>
                    <button
                        type="button"
                        className="cr-c-carousel__button-left"
                        disabled={currentPage === 0}
                        onClick={rotateCarouselLeft}
                    >
                        left
                    </button>
                    <button
                        type="button"
                        className="cr-c-carousel__button-right"
                        disabled={currentPage === carouselPages.length - 1}
                        onClick={rotateCarouselRight}
                    >
                        right
                    </button>
                </Fragment>
            )}
        </div>
    );
};

CarouselControls.propTypes = {
    currentPage: PropTypes.number,
    carouselPages: PropTypes.array,
    rotateCarouselLeft: PropTypes.func,
    rotateCarouselRight: PropTypes.func,
};

CarouselControls.defaultProps = {
    currentPage: 0,
    carouselPages: [],
    rotateCarouselLeft: null,
    rotateCarouselRight: null,
};

export default CarouselControls;
