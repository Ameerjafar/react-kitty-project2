import { useState } from "react";
export function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return <div>
        <input type = "text" placeholder = "title" onChange = {(events) => {
            setTitle(events.target.value);
        }}></input><br/>
        <input type = "text" placeholder = "description" onChange = {(events) => {
            setDescription(events.target.value);
        }}></input><br/>
        <button onClick= {() => {
            fetch('http://localhost:3000/todos', {
                method: 'POST', 
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(async (res) => {
               alert('todo is added');
               console.log(await res.json());
               
            })
        }}>Add a todo</button>
    </div>
}
