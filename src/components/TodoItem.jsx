function TodoItem(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

   function handleDelete(deleteid){
    var temparr = activityArr.filter(function(item){
        if(item.id === deleteid){
            return false
        } else return true
    })
    setactivityArr(temparr)
   }


    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.activity}</p>
            <button onClick={()=>handleDelete(props.id)} className=" bg-black border rounded-md text-red-600 p-1">Delete</button>
        </div>


    )
}

export default TodoItem