import React from 'react';

import './App.css';

const withFilterList = FilterList => {
    class WithFilterList extends React.Component {
        render() {
            const {onFilterListChange} = this.props;
            return <FilterList onFilterListChange={onFilterListChange}/>
        }
    }

    return WithFilterList;
}

export default withFilterList;