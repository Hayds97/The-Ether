import  Chat  from "./assets/Pages/Chat";
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Signup from "./assets/Pages/Signup";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import NotFound from "./assets/Pages/NotFound";
import { UserAuth } from "./context/AuthContext";

function App() {
console.log(UserAuth()?.isLoggedin)

  return (
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    
  </main>  
  );
}

export default App
