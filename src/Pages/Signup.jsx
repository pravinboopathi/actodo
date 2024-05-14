import { Link, useNavigate, } from "react-router-dom"
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Signup(props){

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()
   

    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    function handleUInput(event) {
        setEusername(event.target.value);
    }

    function handlePInput(event) {
        setEpassword(event.target.value);
    }
    function handleConfirmPasswordInput(event) {
        setConfirmPassword(event.target.value);
    }

    function addUser(){
        if (epassword !== confirmPassword){
            alert("Password doesnt match");
            return
        }
        setusers([...users,{username:eusername, password:epassword}])
        navigate("/login")
    }


    return(
       <div className=" bg-black p-7 md:p-10">
        <div className="border rounded-md bg-[#efefef] p-10">
        <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
        <p>Sign Up here :)</p>

        <div className="flex flex-col gap-2 my-2">
        <input type="text" className=" border border-black w-52 p-1 bg-transparent rounded-md" placeholder="Username" onChange={handleUInput}/>
        <input type="password" className=" border border-black w-52 p-1 bg-transparent rounded-md" placeholder="Password" onChange={handlePInput}/>
        <input type="password" className=" border border-black w-52 p-1 bg-transparent rounded-md" placeholder="Confirm password" onChange={handleConfirmPasswordInput}/>
        <button className=" bg-[#fca201] rounded-md p-1 w-24 text-center" onClick={addUser}>Sign Up</button>

        <p>Already have an account ? <Link to={'/'} className=" underline hover:text-red-600">Login</Link> </p>
        <br />
        <p className=" text-gray-700">Note :- This ToDo App is just an local storage one, so your username & password will work only until you close the browser, once you reload or close the browser then you will need to create Again !</p>
        </div>
        
        
        </div>
        
       </div>
    )
}

export default Signup