import React from 'react';
import ToDoList from './TodoList';

class Todo extends React.Component {

    state = { data: [], id: 0, completed: false };

    handleAddItem = () => {
        this.setState(prevState => ({
            id: prevState.id + 1,
            data: [
                ...prevState.data,
                { uuid: prevState.id + 1, text: this.refs.textInput.value, completed: false }
            ]
        })
        );
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref="textInput"></input>
                    <button onClick={this.handleAddItem}>ADD TO LIST</button>
                </div>
                <ToDoList data={this.state.data} />
            </div>
        );
    }
}

export default Todo;