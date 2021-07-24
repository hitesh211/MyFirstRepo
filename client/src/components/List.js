import React, { useEffect, useState } from 'react';
import Edit from './Edit';

const List = () =>{
    const [todos, setTodos] = useState([]);

    // listing todo values function ....
    const getTodos = async id =>{
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    // delete function ....
    const delete_todo = async (id) =>{
        try {
            const delete_todo = await fetch(`http://localhost:5000/todos/${id}`,{
                method: 'DELETE'
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));

            
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getTodos();
    }, []);

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th> description </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo =>(
                    <tr>
                        <td>{todo.description}</td>
                        <td>
                            <Edit todo={todo} />
                        </td>
                        <td> 
                            <button 
                                className="delete" 
                                onClick={()=> delete_todo(todo.todo_id)}
                            > 
                                x 
                            </button>
                        </td>
                    </tr>
                ))}
                         
            </tbody>
            
        </table>
        </>
    )
}

export default List;