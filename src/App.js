import { useState } from "react";
import { LoginContext } from "./Context";
import Login from "./Login";


function App() {

const [username,setUsername]=useState([])


  return (
    <div className="App">
      <LoginContext.Provider value={{username,setUsername}}>
      <Login/>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
