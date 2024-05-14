import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Login(props) {
    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");
    const [ruser, setRuser] = useState(true); // State to manage login status

   const users = props.users
   const navigate = useNavigate()

    function handleUInput(event) {
        setEusername(event.target.value);
    }

    function handlePInput(event) {
        setEpassword(event.target.value);
    }

    function checkUser() {
        const foundUser = users.find(user => user.username === eusername && user.password === epassword);
        if (foundUser) {
            console.log("Login Success");
            navigate('/Landing', {state:{username:eusername}})
        } 
        
        else {
            console.log("Login Failed");
            setRuser(false)
        }
    }

    return (
        <div className=" bg-black p-7 md:p-10">
            <div className="border rounded-md bg-[#efefef] p-10">
                <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                {
                    ruser ?<p>I help you manage your activities after you login :)</p>:<p className=" text-red-700">Signup before Login !</p>
                }
                

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className=" border border-black w-52 p-1 bg-transparent rounded-md"
                        placeholder="Username"
                        onChange={handleUInput}
                    />

                    <input
                        type="text"
                        className=" border border-black w-52 p-1 bg-transparent rounded-md"
                        placeholder="Password"
                        onChange={handlePInput}
                    />

                   <button className=" bg-[#8272da] rounded-md p-1 w-24 text-center" onClick={checkUser}>Login</button>
                     
                   

                    <p>Don't have an account? <Link to={'/signup'} className=" underline hover:text-red-600">Sign Up</Link> </p>
                    <br />

                    {
                        ruser?"":<div><p>Test Login:-</p>
                        <p>Username:admin</p>
                        <p>Password:123</p></div>
                    }
                    
                </div>

            </div>

           <p className=" text-gray-300">Dev - Pravin boopathi</p>
        </div>
    );
}

export default Login;
