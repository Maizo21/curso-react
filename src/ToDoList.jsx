import './ToDoList.css'

const ToDoList = (props) => {
  return (
    <>
      <div className='todo-list'>
        {props.children}
      </div>
        
    </>
  )
}

export default ToDoList