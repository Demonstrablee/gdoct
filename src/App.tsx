import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FinalD from "./pages/FinalD"; // final diagnosis
import "./App.css";

function App() {
  return (
    <div>
   
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/gdoct/'}>
        <Routes>
          <Route path="/" element = {<Home/>} />  
          <Route path="/dia" element={<FinalD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;