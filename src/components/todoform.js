import React from 'react'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../styles/todoform.css"
function Todoform(props) {
    const [singleTodo, setSingleTodo] = useState({title:"",description:"",id:""})
    let date = new Date()
    
    function submitHandle(e){
        e.preventDefault()
        
        props.setTodos([...props.todos,singleTodo])
        setSingleTodo({ title: "", description: "", id: "" })
    }
    return (
        <div>
            <h1 className="form-heading"> Todo List </h1>
            <form onSubmit={submitHandle}>
                <div className="title">
                <TextField type="text"  value={singleTodo.title} variant="outlined" label="Title" onChange={(e)=>{setSingleTodo({...singleTodo,"title":e.target.value,id:date.getMilliseconds(),"time":date.toLocaleTimeString()})}} name="title" />  <br />
                </div>
                <div className="description">
                    <TextField variant="outlined" multiline rows={4} label="Description" type="text" onChange={(e)=>{setSingleTodo({...singleTodo,"description":e.target.value})}} value={singleTodo.description} name="description" /> <br />
                </div>
                <button className="btn"> Add Todo </button>
            </form>
        </div>
    )
}

export default Todoform