import React from 'react';

import './ToDoList.css';

const withToDoListState = (Component) => {

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
            //pass all initial props and the new computed props 
            return <Component {...this.props} outputList={this.state.outputList.filter(({title}) => title.includes(this.props.filter))}/>
        }
    }

    return WithToDoListState;
}

export default withToDoListState;