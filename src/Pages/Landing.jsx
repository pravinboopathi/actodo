import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing(){

    const data = useLocation()

    return(
        <div className=" bg-black p-16 ">
      
      <div className=" bg-[#efefef] p-10 border rounded-md">
        <Header name={data.state.user}/>
        
        {/* card components */}
        <div className=" flex justify-between gap-7 my-5 flex-wrap text-center">

      <Card bgcolor={"#8272da"} title={'23'} subtitle={'Chennai'} />
      <Card bgcolor={"#fd6663"} title={"May"} subtitle={"15:14:05"}/>
      <Card bgcolor={"#fca201"} title={"Built Using"} subtitle={"React"}/>

    
        </div>

        {/* todo components  */}
       <TodoContainer/>


      </div>
    </div>
    )
}

export default Landing