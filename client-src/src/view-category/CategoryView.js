import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CategoryView.scss';

class CategoryView extends Component {
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
            <div className="bs-c-category-view">
                {this.props.booksFromCategory.map(book => (
                    <div>
                        <img src={'http://localhost:3000/api/covers/' + book.id} alt="book cover" />
                        <p>{book.year}</p>
                    </div>
                ))}
            </div>
        );
    }
}

CategoryView.propTypes = {};

export default CategoryView;
