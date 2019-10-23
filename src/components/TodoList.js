import React from 'react';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            completed: []
        };
    }

    handleChange = uuid => {
        this.setState({
            ...this.state,
            completed: { ...this.state.completed, [`${uuid}`]: !this.state.completed[uuid] }
        });
    };

    render() {
        return (
            <ol>
                {this.props.data.map(list => {
                    return (
                        <ol key={list.uuid} style={{ textDecoration: this.state.completed[list.uuid] ? 'line-through' : 'none' }} >
                            <input type="checkbox" onChange={() => this.handleChange(list.uuid)} checked={this.state.completed[list.uuid]} ></input>{list.text}</ol>
                    );
                })}
            </ol>
        );
    }
}

export default ToDoList;