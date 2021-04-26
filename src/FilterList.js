import './App.css';
import React from 'react';

class FilterList extends React.Component {
    constructor(props) {
      super(props);
      this.filterList = this.filterList.bind(this);
    }
    
    filterList(event) {    
      this.props.onFilterListChange(event.target.value);
    }

    render() {
      return (     
        <input id="filter-list" type="text" placeholder="Search for task..." onChange={this.filterList} />
      )
    }
  }

export default FilterList;