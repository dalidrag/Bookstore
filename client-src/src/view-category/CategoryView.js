import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CategoryView extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        this.props.fetchBooksFromCategory('Fiction');
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
            <div>
                <p>Category Page</p>
            </div>
        );
    }
}

CategoryView.propTypes = {};

export default CategoryView;
