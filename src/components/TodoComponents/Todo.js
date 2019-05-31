import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  getStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ?
          'line-through' : 'none'
      }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={ this.getStyle() }>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
            {' '}
            <p> {title} </p>
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </div>
    )    
  }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Todo;
