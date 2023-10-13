import './ToDoItem.css'

const ToDoItem = (props) => {
    return( 
        <>
          <div className="list-item">
            <p onClick={props.onComplete} className={`icon-status ${props.completed ? "done": "pending"}`}>{props.completed ? 'V': 'X'}</p>
            <p>{props.text}</p>
            <span onClick={props.onDelete} className='close-btn'>X</span>
          </div>  
        </>
    );
}

export default ToDoItem