import './ToDoCounter.css'

const ToDoCounter = (props) => {
  return (
    <div>
      <h1>ToDoList</h1>
      <h2 className='main-title'>Llevas {props.completed} de {props.total}</h2 >
    </div>

  )
}

export default ToDoCounter