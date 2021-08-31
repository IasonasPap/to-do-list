import React from 'react';

import './FilterList.css';

class FilterList extends React.Component {
  
    render() {
      const {onFilterListChange} = this.props;
      return (     
        <input 
          id="filter-list" 
          type="text" 
          placeholder="Search for task..." 
          onChange={(event) => onFilterListChange(event.target.value)} 
        />
      )
    }
  }

export default FilterList;