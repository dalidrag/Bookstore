import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Carousel from '../elements/carousel/Carousel';
import CarouselSlide from '../elements/carousel/CarouselSlide';

class HomeView extends Component {
    static propTypes = {
        fetchAllBooksByCategory: PropTypes.func.isRequired,
        allBooksByCategory: PropTypes.array,
    };

    static defaultProps = {
        allBooksByCategory: [{id: 1, name: 'No books.'}],
    };

    componentDidMount() {
        this.props.fetchAllBooksByCategory({category: 'Fiction'});
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const allBooks = this.props.allBooksByCategory.map(book =>
            <CarouselSlide key={book.id}>
                <img src={'http://localhost:3000/api/covers/' + book.id} alt="book cover" />
            </CarouselSlide>
        );

        return (
            <Carousel>
                {allBooks}
            </Carousel>
        );
    }
}

export default HomeView;
