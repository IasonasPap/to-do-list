import React from 'react';

import './ToDoList.css';

import withToDoListState from './withToDoListState';

class ToDoList extends React.Component {    
  
    render() {
      const {outputList} = this.props;
      return (
        <ul className="to-do-list">
            {
              outputList.map( ({id,title}) => 
                <li className="to-do-list-item" key={id}><span className="list-item-id">{id}</span>{title}</li>
              )
            }
        </ul>
      )
    }
}
  
export default withToDoListState(ToDoList);