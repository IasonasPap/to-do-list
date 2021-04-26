import './App.css';
import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
      super(props);
      console.log("To do list constructor!")
      this.state = {
          outputList : []
      }      
    }
  
    componentDidMount() {
      console.log("To Do List mounted!")
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        const initialList = json.map( ({id,title}) => 
          <li id="to-do-list-item" key={id}><span id="list-item-id">{id}</span>{title}</li>
        );
        this.setState({outputList: initialList})
      });    
    }
  
    render() {
      console.log("render constructor");

      return (
        <ul className="to-do-list">
            {this.state.outputList.length === 0 
            ? null
            : this.state.outputList.filter(
              (listItem) => listItem.props.children[1].includes(this.props.filter)
            )
            }
        </ul>
      )
    }
  }
  
  export default ToDoList;