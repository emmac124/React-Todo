import React from 'react';
import './styles.css'

const Todo = (props) => {

    const handleClick = () => {
        props.toggleItem(props.item.task)
    }

    return (
        <div>
            <li onClick={handleClick} className={props.item.completed === true ? 'completed' : ''}>{props.item.task}</li>
        </div>
    );
}

export default Todo;
