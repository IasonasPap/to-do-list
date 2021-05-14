import React from 'react';

import './App.css';

import ToDoList from './ToDoList';

import FilterList from './FilterList';

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
      <div className="App">
        <header className="App-header">
          <h1 id="title">
            To Do List
          </h1>
          <div className="to-do-list-container">
          <FilterList onFilterListChange={this.changeFilterString}/>
          <ToDoList filter={this.state.filter}/>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
