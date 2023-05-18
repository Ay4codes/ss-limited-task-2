import './styles/App.css';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from './store/store';
import { useState } from 'react';

function App() {
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState()
  const [onEdit, setOnEdit] = useState(false)

  const handleAddTodo = (value) => {
    const todoText = value;
    if (todoText) {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText
      }));
    }
  };

  const handleEditTodo = (value, id) => {
    const updatedText = value;
    if (updatedText) {
      dispatch(editTodo(id, updatedText));
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  function createTodoItem(todo) {
    return (
      <div className='bg-[#E4E9FD] rounded-md flex gap-2 items-center px-3 py-3'>
        <input onChange={(e) => handleEditTodo(e.target.value, todo.id)} autoFocus={onEdit ? false : true} onBlur={(e) => {setOnEdit(false)}} readOnly={onEdit ? false : true} className={`paragraph w-[85%] bg-[#0000] border-none focus:outline-none py-1 ${onEdit ? 'border-bottom' : ''}`} value={todo.text} />
        <div className='btn-wrapper bg-white w-[30px] h-[30px] rounded-md flex justify-center items-center cursor-pointer'><Icon onClick={() => {setOnEdit(true)}} icon="system-uicons:write" width={20} color="#A683E3" /></div>
        <div className='btn-wrapper bg-white w-[30px] h-[30px] rounded-md flex justify-center items-center cursor-pointer'><Icon onClick={() => {handleDeleteTodo(todo.id)}} icon="material-symbols:delete-outline-rounded" width={20} color="#A683E3" /></div>
      </div>
    )
  }
  return (
    <div className="app-wrapper app fixed w-full h-full flex justify-center">
      <div className='w-[30%]'>
        <h1 className="title-bg mt-11 text-center">Todo List</h1>
        <div className='bg-[#A683E3] rounded-lg mt-5 px-5 py-2 sm-title-bg text-center w-[70%] mx-auto'>
          {formattedDate}
        </div>
        <div className='bg-white mt-4 rounded-md todo-wrapper'>
          {todos.length !== 0 && <div className='p-2'>
            {todos.map(createTodoItem)}
          </div>}
          <form onSubmit={(e) => e.preventDefault()} action="">
            <div className='flex items-center px-2 border-top'>
              <input onChange={(e) => {setTodo(e.target.value)}} value={todo} type="text" className='bor border-none focus:outline-none py-3 paragraph px-1 w-[100%]' placeholder='New Item' name="" id="" />
              <button onClick={() => {handleAddTodo(todo); setTodo('')}} type='submit'><Icon className='' icon="material-symbols:add-circle-rounded" cursor={'pointer'} color="#A683E3" width={40} /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
