import { useState } from "react";
import ToDoList from './ToDoList';
import '../index.css';
import NewToDoForm from './NewToDoForm';
function App() {
  const [todos, setToDos] = useState([
    'Have Fun',
    'Learn React',
    'Learn the MERN-Stack'
  ]);
  const [showTodos, setShowTodos] = useState(true);
  
  function addTodo(todo)  {
    setToDos([...todos, todo]);
  }
  
  return (
<<<<<<< HEAD
    <div className="App">
        <h1>React To-Do</h1>
        <button onClick={function() {setShowTodos(!showTodos)}}>{showTodos ? 'HIDE' : 'SHOW'}</button>
        {showTodos && <ToDoList todos={todos} />}
        <hr />
        <NewToDoForm addTodo={ addTodo }/>
    </div>
=======
      <div className="App">
          <h1>React To-Do</h1>
          <ToDoList />
      </div>
>>>>>>> ed1c3a1faecd41743873e8bd2459013e50e279f3
  );
}

export default App
