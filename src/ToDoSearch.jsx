import './ToDoSearch.css'

const ToDoSearch = ({
  searchValue,
  setSearchValue
}) => {

  return (
    <div className='input-container'>
     <input className="search-bar" type="text" placeholder="Buscar Tarea" value={searchValue}
     onChange={(event)=>{
        setSearchValue(event.target.value)
     }}/>
    </div>

  )
}


export default ToDoSearch