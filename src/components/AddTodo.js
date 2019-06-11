import React from 'react';

class AddTodo extends React.Component {

    // state
    state = {
        todo: {
            content: ''
        }
    }

    // function
    handleChange = (e) => {
        let tempTodo = {
            content: e.target.value
        }
        this.setState({
            todo: tempTodo
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: {
                content: ''
            }

        })
    }

    render() {
        return (
            <div className="container" >
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">New To Do</label>
                    <input type="text" id="todo" onChange={this.handleChange} value={this.state.todo.content} placeholder="Type your todo.." />

                    <a onClick={this.handleSubmit} className="waves-effect waves-light btn">Add Todo</a>
                </form>
            </div>
        );
    }
}

export default AddTodo;
