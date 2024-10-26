import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
