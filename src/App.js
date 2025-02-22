import React from 'react';

import './App.css';

import ToDoList from './components/ToDoList/ToDoList';
import FilterList from './components/FilterList/FilterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    }
    this.changeFilterString = this.changeFilterString.bind(this);
  }  
  
  changeFilterString(string) {    
    this.setState(
      { filter: string }
    );
  }

  render() {
    return (
      <div className="app">
          <h1 id="title">
            To Do List
          </h1>

          <FilterList onFilterListChange={this.changeFilterString}/>
          
          <div className="to-do-list-container">
            <ToDoList filter={this.state.filter}/>
          </div>
      </div>
    )
  }
}

export default App;
