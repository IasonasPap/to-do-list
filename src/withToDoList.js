import React from 'react';

import './App.css';

const withToDoListState = ToDoList => {

    class WithToDoListState extends React.Component {
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
            return <ToDoList outputList={this.state.outputList.filter(({title}) => title.includes(this.props.filter))}/>
        }
    }

    return WithToDoListState;
}

export default withToDoListState;