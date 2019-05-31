import React from 'react';
import Header from './components/TodoComponents/Header'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';
import './App.css';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Practice JavaScrips',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Style this project',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  // Delete Multiple (Clear button)
  clearAll = (e) => {
    e.preventDefault();
    this.setState({ todos: this.state.todos.filter(todo => !todo.completed) })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div class="App">
        <div className="container">
          <Header />
          <TodoForm addTodo={this.addTodo} clearAll={this.clearAll}/>
          <TodoList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
