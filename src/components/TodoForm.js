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

    handleClick = () => {
        this.props.handleComplete();
    }

    render(){
        return (
            <>
            <form onSubmit={this.handleAddSubmit}>
                <input onChange={this.handleChanges} value={this.state.newTodoName} type='text' name='item' placeholder='todo...' />
                <button onSubmit={this.props.addItem} className='add-todo'>+</button>
             </form>
             <div>
              <button onClick={this.handleClick} className='clr-todo'>Clear Completed</button>
              </div>
         </>
        );
    }
}

export default TodoForm;