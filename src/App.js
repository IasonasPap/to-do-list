import './App.css';
import React from 'react';
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
          <FilterList onFilterListChange={this.changeFilterString}/>
          <ToDoList filter={this.state.filter}/>
        </header>
      </div>
    )
  }
}

export default App;
