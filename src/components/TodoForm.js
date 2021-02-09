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

    handleAddSubmit = (evt) => {
        evt.preventDefault();
        this.props.addItem(this.state.newTodoName);
        this.setState({
            newTodoName: ""
        })
    }

    // handleClick = () => {
    //     this.handleItemsCompleted()
    // }

    render(){
        return (
            <form onSubmit={this.handleAddSubmit}>
                <input onChange={this.handleChanges} value={this.state.newTodoName} type='text' name='item' placeholder='todo...' />
                <button onSubmit={this.props.addItem} className='add-todo'>Add Todo</button>
                 <button /*onClick={handleClick}*/className='clr-todo'>Clear Completed</button>
             </form>
        );
    }
}

export default TodoForm;