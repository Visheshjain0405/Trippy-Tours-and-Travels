import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Signupform from "./component/Signupform";
import Loginform from "./component/Loginform";
import Otp from "./component/Otp";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signupform />}></Route>
        <Route path="/" element={<Loginform />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
      </Routes>

      {/* <Navbar /> */}
    </div>
  );
}

export default App;
