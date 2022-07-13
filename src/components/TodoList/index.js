
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions/action';
import { todosRemainingSelector } from '../../redux/selectors/selector';
import Todo from '../Todo/todo';




export default function TodoList() {
  const [nameTodo, setNameTodo] = useState('');
  const [ prioriry, setPrioriry] = useState('Medium');

  const dispatch = useDispatch();

  const todoList = useSelector(todosRemainingSelector)
  console.log('todoList', todoList)

  const handleClickAddTodo = (e) => {

    dispatch(addTodo({
      id: new Date().getTime().toString(),
      name: nameTodo,
      completed: false,
      prioriry: prioriry,
    }));
    setNameTodo('');
    setPrioriry('Medium');
  }

  const handleInputChange = (e) =>{
    setNameTodo(e.target.value)
  }

  const handleChangePriority = (e) =>{
    setPrioriry(e.target.value)
  }

  return (
    <div>
        <div style={{margin:'20px 0'}}>
          <input value={nameTodo} onChange={handleInputChange}/>
          <select name="prioriry" id="prioriry" value={prioriry}  onChange={handleChangePriority}>
            <option value="Medium">Medium</option>
            <option value="Hight">Hight</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleClickAddTodo}>Add</button>
          <ul style={{margin:'20px 0'}}>
            {todoList.map((todo)=>(
              <Todo 
                key={todo.id}
                name={todo.name}
                id={todo.id}
                completed={todo.completed}
                prioriry={todo.prioriry}
              />
            ))}
          </ul>
        </div>
    </div>
  );
}