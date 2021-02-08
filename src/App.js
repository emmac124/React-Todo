import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const todos = [
  {
    task: 'Learn setState()',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Style my to do list',
    id: 1528817084358,
    completed: false
  },  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos
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

//   handleChanges = (e) => {
//     this.setState = {
//         todos: e.target.value
//     }
// }

addItem = (item) => {
    this.setState = {
        todos: []
    }
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />  
        </div>
        <div> 
          <TodoForm  addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
