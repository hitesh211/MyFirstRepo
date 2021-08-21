const express = require('express');
const cors = require('cors');
const pool = require('./db');


//initializing express...
const app = express();
const PORT = 5000;

//middleware...
app.use(cors());
app.use(express.json());

// routes//

//create a todo
app.post("/todos",async(req,res)=>{
    try{
        const { description } = req.body;
        const new_todo = await pool.query(
            "INSERT INTO todo_list (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(new_todo.rows[0]);
    } catch(err){
        console.error(err.message);
    }
})

//get all todo
app.get("/todos",async(req,res)=>{
    try{
        const all_todos = await pool.query(
            "SELECT * FROM todo_list"
        );
        res.json(all_todos.rows);
    } catch(err){
        console.error(err.message);
    }
})

//get a todo
app.get("/todos/:id",async(req,res)=>{
    try{
        const { id } =req.params;
        const todo = await pool.query(
            "SELECT * FROM todo_list WHERE todo_id = $1",[id]
        )
        res.json(todo.rows[0]);
    } catch(err){
        console.error(err.message);
    }
})

//update a todo
app.put("/todos/:id",async(req,res)=>{
    try{
        const { id } =req.params;
        const { description } = req.body;
        const update_todo = await pool.query(
            "UPDATE todo_list SET description = $1 WHERE todo_id = $2",
            [description, id]
        );
        res.json("updated successfully...");
    } catch(err){
        console.error(err.message);
    }
})
//delete a todo
app.delete("/todos/:id",async(req,res)=>{
    try{
        const { id } = req.params;
        const delete_todo = await pool.query(
            "DELETE FROM todo_list WHERE todo_id = $1",
            [id]
        )
        res.json('todo was deleted...')
    } catch(err){
        console.error(err.message);
    }
})


app.listen(PORT, ()=>{
    console.log(`server running at port: ${PORT}`);
})
