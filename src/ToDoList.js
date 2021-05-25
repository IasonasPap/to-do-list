import React from 'react';

import withToDoList from './withToDoList';
import './App.css';

class ToDoList extends React.Component {    
  
    render() {
      const {outputList, filter} = this.props;
      return (
        <ul className="to-do-list">
            {
              outputList.filter(
                  ({title}) => title.includes(filter)
              ).map( ({id,title}) => 
                <li id="to-do-list-item" key={id}><span id="list-item-id">{id}</span>{title}</li>
              )
            }
        </ul>
      )
    }
}
  
export default withToDoList(ToDoList);