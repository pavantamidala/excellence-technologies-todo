import React from 'react'
import '../styles/alltodo.css'
function AllTodos(props) {
    return (
        <React.Fragment>
            <h1 className="todo-heading"> Todos </h1>
        <div className="container">
            {
                props.todos.map((obj)=>{
                    return <div className="card" key={obj.id} >
                        <h3> {obj.title} </h3>
                        <p> {obj.description} </p>
                        <p className="time">{obj.time} </p>
                    </div>
                })
            }
        </div>
        </React.Fragment>
    )
}

export default AllTodos
