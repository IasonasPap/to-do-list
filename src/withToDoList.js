import React from 'react';

import './App.css';

const withToDoList = ToDoList => {

    class WithToDoList extends React.Component {
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
            return <ToDoList outputList={this.state.outputList} filter={this.props.filter}/>
        }
    }

    return WithToDoList;
}

export default withToDoList;