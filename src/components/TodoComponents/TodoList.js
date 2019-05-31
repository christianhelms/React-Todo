import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return this.props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} markComplete={ this.props.markComplete } delTodo={this.props.delTodo}/>
      ));
  }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;
