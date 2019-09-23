import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {groupBy} from 'lodash';

import Carousel from '../elements/carousel/Carousel';
import CarouselSlide from '../elements/carousel/CarouselSlide';

class HomeView extends Component {
    static propTypes = {
        fetchAllBooksByCategory: PropTypes.func.isRequired,
        allBooksByCategory: PropTypes.array,
    };

    static defaultProps = {
        allBooksByCategory: [{id: 0, name: 'No books.', category: 'No category.'}],
    };

    componentDidMount() {
        this.props.fetchAllBooksByCategory();
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const allBooksByCategory = groupBy(this.props.allBooksByCategory, book => book.category);

        return (
            Object.keys(allBooksByCategory).map(category => {
                return (
                    <div key={category}>
                        <p>{category}</p>
                        <Carousel>
                            {allBooksByCategory[category].map(book => (
                                <CarouselSlide key={book.id}>
                                    <img src={'http://localhost:3000/api/covers/' + book.id} alt="book cover" />
                                </CarouselSlide>
                            ))}
                        </Carousel>
                    </div>
                );
            })
        );
    }
}

export default HomeView;
