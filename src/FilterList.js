import React from 'react';

import './App.css';

class FilterList extends React.Component {
  
    render() {
      return (     
        <input id="filter-list" type="text" placeholder="Search for task..." onChange={(event) => this.props.onFilterListChange(event.target.value)} />
      )
    }
  }

export default FilterList;