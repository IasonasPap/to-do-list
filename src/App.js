import './App.css';
import React from 'react';
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialList : [],
      outputList : []
    }
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {
      const initialList = json.map( ({id,title}) => 
        <li id="to-do-list-item" key={id}><span id="list-item-id">{id}</span>{title}</li>
      );
      this.setState({initialList: initialList, outputList: initialList})
    });    
  }

  filterList(event) {    
    this.setState({
      outputList: this.state.initialList.filter((listItem) => {
        if(JSON.stringify(listItem).includes(event.target.value)) return true;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title">
            To Do List
          </h1>
          <input id="filter-list" type="text" onChange={this.filterList} />
          <ul className="to-do-list">
            {this.state.outputList}
          </ul>
        </header>
      </div>
    )
  }
}

export default App;
