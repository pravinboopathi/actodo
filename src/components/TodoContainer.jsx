import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { useState } from "react"
function TodoContainer() {

    const[activityArr,setactivityArr]= useState([
        {
            id:1,
            activity:"Buy groceries",
        },
        {
            id:2,
            activity:"Go for a Walk",
        },
        {
            id:3,
            activity:"Study React.js"
        }
    ])

    return (
        <div>

            <div className="flex gap-5 flex-wrap">
                <TodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>


        </div>
    )
}

export default TodoContainer