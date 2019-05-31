import React from 'react';

export class TodoForm extends React.Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    // to make this plural [e.target.name] instead of single field w/ title:
    onChange =  (e) => this.setState({ [e.target.name]: e.target.value }); 

    render() {
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '6', padding: '5px' }}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{ flex: '2' }}
                />
                <input 
                    type="button"
                    value="Clear"
                    className="clearAll"
                    style={{ flex: '2' }}
                    onClick={this.props.clearAll}
                />
            </form>
        )
    }
}

export default TodoForm;