// import Header from "./components/Header";
// import Card from "./components/Card";
// import TodoContainer from "./components/TodoContainer";

import { useState } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";

function App(){

  const [users,setusers] = useState([
    {
        username: "admin",
        password: "123"
    }
]);

return( <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/login' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='Landing' element={<Landing/>}/>
  </Routes>
  </BrowserRouter>
</div>
)
}

export default App
