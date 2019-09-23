import React, {Component} from 'react';
import PropTypes from 'prop-types';


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
            <div key={book.id}>
                <p>{book.name}</p>
                <img src={'http://localhost:3000/api/covers/' + book.id} alt="book cover" />
            </div>
        );

        return (
            <div>
                {allBooks}
            </div>
        );
    }
}

export default HomeView;
