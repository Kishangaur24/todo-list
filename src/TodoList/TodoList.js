import React, { useState } from 'react'
import style from "./TodoList.module.css"
import image1 from "../asset/delete.png"
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
    <div className={style.main}>
        <div className={style.container}>
     <h1>Todo - List</h1>
     <div className={style.add}>
     <input placeholder='Add Todo'
      onChange={(e)=>setTodo(e.target.value)} 
      value={todo}/>
     <button className={style.btn} onClick={handleTodo}>Add</button>
     </div>
     <ol className={style.todo}>
        {newTodo.map((item, i) => (
          <div key={i}>
            {
           
            <ol className={style.deleteTodo}>
         {item}  &nbsp;
            <button onClick={() => handleDelete(i)}> <img src={image1} height={20}/></button>
            </ol>
            
              
}


            
          </div>
        ))}
      </ol>
      </div> 
    </div>
  )
}

export default TodoList
