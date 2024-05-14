import { useState } from "react"

function TodoForm(props){

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setNewactivity] = useState("")

    function handleChange(event){
        setNewactivity(event.target.value)
    }

    function addActivity(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }

    function handleKey(event){
        if(event.key == 'Enter'){
            addActivity()
        }
    }

    return(
        <div className=" flex flex-col gap-3">
        <h1 className=" text-2xl font-medium">Manage Activities</h1>
        <div>
            <input type="text" value={newactivity} onKeyDown={handleKey} onChange={handleChange} className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
            <button onClick={addActivity} className=" bg-black text-white p-1 border border-black">ADD</button>
        </div>

    </div>
    )
}

export default TodoForm