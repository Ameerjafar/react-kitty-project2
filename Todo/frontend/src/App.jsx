
import { useEffect, useState } from 'react'
import { CreateTodo } from './Component/CreateTodo'
import { Todos } from './Component/Todos'
function App() { 
  const [todos, setTodos] = useState([]);
  try {
    useEffect(() => { 
      fetch('http://localhost:3000/todos').then(async (res) => {
        const jsonData = await res.json();
        console.log(jsonData);
        setTodos(jsonData);
      });
    }, []);
  }catch(error) {
    console.error(error);
  }
  return (
    <>
      <CreateTodo/>
      <Todos todos = {todos}></Todos>
    </>
  )
}
export default App
