import { useState } from "react";
import '../NewToDoForm.css';
const NewToDoForm = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo(event) {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
      <div className="NewForm">
        <h2>New To-Do</h2>
        <form onSubmit={handleAddTodo}>
            <input 
            value={newTodo} 
            onChange={(event)  => setNewTodo(event.target.value)}
            placeholder="New To-Do" 
            required
            pattern=".{4,}"
            />
            <button type='submit'>ADD TO-DO</button>
        </form>
      </div>
    )
};

export default NewToDoForm;