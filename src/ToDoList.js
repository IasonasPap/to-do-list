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
          outputList: json
        })
      );    
    }
  
    render() {

      return (
        <ul className="to-do-list">
            {
              this.state.outputList.filter(
                  ({title}) => title.includes(this.props.filter)
              ).map( ({id,title}) => 
                <li id="to-do-list-item" key={id}><span id="list-item-id">{id}</span>{title}</li>
              )
            }
        </ul>
      )
    }
  }
  
  export default ToDoList;