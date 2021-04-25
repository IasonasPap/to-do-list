import './App.css';
import React from 'react';
import ToDoList from './ToDoList';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title">
            To Do List
          </h1>
          <ToDoList />
        </header>
      </div>
    )
  }
}

export default App;
