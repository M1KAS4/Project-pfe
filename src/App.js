import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
        </Routes>
    </>
  );
}

export default App;
