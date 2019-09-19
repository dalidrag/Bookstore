import React, {Component} from 'react';
import PropTypes from 'prop-types';


class HomeView extends Component {
    static propTypes = {
        fetchAllBooksByCategory: PropTypes.func.isRequired,
        allBooksByCategory: PropTypes.string,
    };

    static defaultProps = {
        allBooksByCategory: 'No books.',
    };

    componentDidMount() {
        this.props.fetchAllBooksByCategory('All books by category.');
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {this.props.allBooksByCategory}
            </div>
        );
    }
}

export default HomeView;
