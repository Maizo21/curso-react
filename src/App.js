import './App.css';
import ToDoCounter from './ToDoCounter';
import ToDoSearch from './ToDoSearch';
import ToDoList from './ToDoList';
import CreateToDoButton from './CreateToDoButton';
import ToDoItem from './ToDoItem';
import react from 'react';

const allTodos = [
  {
    text: 'Cortar cebolla',
    completed: true,
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: false,
  },
  {
    text: 'Llorar con la llorona',
    completed: false,
  },
  ]

function App() {
  const [toDoValue, setToDoValue] = react.useState(allTodos);
  const [searchValue, setSearchValue] = react.useState('');

  const completedTodos = toDoValue.filter(todo => !!todo.completed).length;
  const totalTodos = toDoValue.length;
  const searchTodos = toDoValue.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  
  console.log(searchValue);

  const isCompleted = (text) => {
    const newTodos = [...toDoValue];
    const toDoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[toDoIndex].completed = true;
    setToDoValue(newTodos);
    console.log('isCompleted');
  }

  const deleteToDo = (text) => {
    const newTodos = [...toDoValue];
    const toDoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(toDoIndex,1);
    setToDoValue(newTodos);
    console.log('deleteToDo');
  }

  return (
    <>
      <ToDoCounter completed={completedTodos} total={totalTodos} />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <ToDoList>
        {searchTodos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete ={()=>{isCompleted(todo.text)}} onDelete ={()=>{deleteToDo(todo.text)}} />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </>
  );
}

export default App;
