import axios from "axios";
import { useState, useEffect } from "react";
import Todos from "./components/Todos";

function App() {

  const [todos,setTodos] = useState(null);
  const [successMessage,setSuccessMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState('');

  
  useEffect(()=>{

    fetchTodos();

    

  },[])

  const fetchTodos = async()=>{
    let res = await axios.get("http://localhost:5001/api/todos")

    setTodos(res.data);

  }

  
  const deleteTodo = async(id)=>{
    

    var config = {
      method: 'delete',
      url: 'http://localhost:5001/api/todos/'+id,
      headers: { 
        'Cache-Control': 'no-cache', 
        'Accept': '*/*', 
        'Accept-Encoding': 'gzip,deflate', 
        'Connection': 'keep-alive'
      }
    };

    axios(config)
    .then(function (response) {

      if(response.status==="success"){

        setSuccessMessage("todo deleted")
        setErrorMessage("")

      }else{
        setSuccessMessage("")
        setErrorMessage("todo not deleted")
      }

    })
    .catch(function (error) {
      console.log(error);
    });


  }

  return(
    <>
    <h4>{successMessage}</h4>
    <h4>{errorMessage}</h4>
    <Todos todos = {todos} deleteTodo ={deleteTodo}  />
    </>
  )

}



export default App;
