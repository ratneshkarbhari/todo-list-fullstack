import React from 'react'

function AddTodo(createTodo) {

    

  return (
    <div>

        <h2>Create Note</h2>

        <form onSubmit={()=>{createTodo}}>

        <input onChange={()=>{setCreateData}} value={createForm.title} name="title" />
        <textarea onChange={setCreateData} value={createForm.details} name="body" />
        <button type="submit">Create</button>

        </form>

    </div>
  )
}

export default AddTodo