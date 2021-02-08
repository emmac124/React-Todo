import React from 'react';

class TodoForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
            newTodoName: ''
        };
    }

    handleChanges = (event) => {
        this.setState({
            newTodoName: event.target.value
        })
    }

    handleSubmit = (evt) => {
        this.props.addItem(this.state.newTodoName);
        evt.preventDefault();
    }

    render(){
        return (
            <form>
                <input type='text' value={this.state.newTodoName} onChange={this.handleSubmit} name='item' placeholder='todo...' />
            <button onSubmit={this.props.addItem} className='add-todo'>Add Todo</button>
            <button className='clr-todo'>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;