import './ToDoItem.css'
import CompleteIcon from './CompleteIcon'
import DeleteIcon from './DeleteIcon'

const ToDoItem = (props) => {
    return( 
        <>
          <div className="list-item">
            
            <p onClick={props.onComplete} className={`icon-status ${props.completed ? "done": "pending"}`}><CompleteIcon/></p>
            <p>{props.text}</p>
            <span onClick={props.onDelete} className='close-btn'><DeleteIcon/></span>
            
          </div>  
        </>
    );
}

export default ToDoItem