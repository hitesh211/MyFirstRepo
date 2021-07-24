import React, { useState } from 'react';

const Input = () =>{

    const [ description, setDescription] = useState("");
    const onSubmitForm = async (e) =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch('http://localhost:5000/todos',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(body)
            });

            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    }


    return(
        <>
            <br />
            <h1> Todo List</h1>
            <br />
            <form onSubmit={onSubmitForm}>
            <input 
                type="Text" 
                placeholder="Add task here" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
            />
            <button> + </button>
            </form>
        </>
    )
}

export default Input;