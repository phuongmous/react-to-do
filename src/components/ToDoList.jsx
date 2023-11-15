import ToDoListItem from "./ToDoListItem";
import '../ToDoList.css';
const ToDoList = ({ todos }) => {
  // const toDoListItems = todos.map((todo) => <ToDoListItem />);
  return (
    <ul className="ToDoList">
      {todos.map((todo, idx) => <ToDoListItem todo={todo} index={idx} key={idx} />)}
    </ul>
  );
}

export default ToDoList;