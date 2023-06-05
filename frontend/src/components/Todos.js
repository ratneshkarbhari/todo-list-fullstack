import React from 'react'

function Todos({todos,deleteTodo}) {
  return (
    <>
    {todos && todos.map(todo=>{
        return <div key={todo._id }>

          <h3>{todo.title}</h3>

          <p>{todo.details}</p>

          <button  onClick={()=>{deleteTodo(todo._id)}}>delete</button>

        </div>
    })}
    </>
  )
}

export default Todos