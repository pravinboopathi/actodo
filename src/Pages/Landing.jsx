import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing(){

   const data = useLocation()

    return(
        <div className=" bg-black p-7 md:p-14">
      
      <div className=" bg-[#efefef] border rounded-md p-8 md:p-10 ">
        <Header name = {data.state.username}/>
        
        {/* card components */}
        <div className=" flex justify-between gap-7 my-5 flex-wrap text-center">

      <Card bgcolor={"#8272da"} title={'23'} subtitle={'Chennai'} />
      <Card bgcolor={"#fd6663"} title={"May"} subtitle={"15:14:05"}/>
      <Card bgcolor={"#fca201"} title={"Built Using"} subtitle={"React"}/>

    
        </div>

        {/* todo components  */}
       <TodoContainer/>


      </div>
      <p className=" text-white text-center"></p>
    </div>
    )
}

export default Landing