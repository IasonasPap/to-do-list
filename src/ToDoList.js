import React from 'react';

import './App.css';

class ToDoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          outputList : []
      }      
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => 
        this.setState({
          outputList: json.map( ({id,title}) => 
        <li id="to-do-list-item" key={id}><span id="list-item-id">{id}</span>{title}</li>
        )})
      );    
    }
  
    render() {

      return (
        <ul className="to-do-list">
            {this.state.outputList.filter(
                (listItem) => listItem.props.children[1].includes(this.props.filter)
              )
            }
        </ul>
      )
    }
  }
  
  export default ToDoList;