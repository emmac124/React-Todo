import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleItem = (clickedItemId) => {
    const newTodos = this.state.todos.map(item => {
      if(item.id === clickedItemId){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    this.setState({
      completed: newTodos
    })
  }


addItem = (itemName) => {
  const item = {
    task: itemName,
    id: Date.now(),
    completed: false
  }
  console.log(item)
  const newTodo = [...this.state.todos, item]
    this.setState({
      todos: newTodo
    })
}

  handleComplete = () => {
    //loop through my todos
    //if a todos.complete = true, dont add it
    //if = false, add it
    this.setState({
      todos: this.state.todos.filter(item => {
        return (!item.completed);
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />  
        </div>
        <div> 
          <TodoForm addItem={this.addItem} handleComplete={this.handleComplete} />
        </div>
        </div>
    );
  }
}

export default App;
