import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

class App extends React.Component {

  // state
  state = {
    todos: [{
      id: 1,
      content: 'Buy some almond milk'
    },
    {
      id: 2,
      content: 'Go to gym'
    }]
  }

  // function
  deleteTodo = (id) => {
    let tempTodo = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(tempTodo));

    this.setState({
      todos: tempTodo
    })
  };

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    let tempTodo = [...this.state.todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(tempTodo));
    this.setState({
      todos: tempTodo
    });

  }

  componentDidMount() {
    localStorage.getItem("todos") && this.setState({
      todos: JSON.parse(localStorage.getItem("todos"))
    });
  }

  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Footer />
      </div>
    );
  }
}

export default App;
