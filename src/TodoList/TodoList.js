import React, { useState } from 'react'

const TodoList = () => {
    const[todo, setTodo] = useState("")
    const[newTodo, setNewTodo] = useState([])

    function handleTodo(){
        setTodo("")
      setNewTodo([...newTodo,todo])
    }

    function handleDelete(i){
        const UpdatedTodos = newTodo.filter((elem, index) => index !== i);
        setNewTodo(UpdatedTodos);
    }

  return (
    <div>
     <h1>Todo - List</h1>
     <input placeholder='Add Todo'
      onChange={(e)=>setTodo(e.target.value)} 
      value={todo}/>
     <button onClick={handleTodo}>Add</button>
     <ol>
        {newTodo.map((item, i) => (
          <div key={i}>
            {
           
            <ol>{item} 
            <button onClick={() => handleDelete(i)}>  delete</button>
            </ol>
            
            
}
    

            
          </div>
        ))}
      </ol>
    </div>
  )
}

export default TodoList
