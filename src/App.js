import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
