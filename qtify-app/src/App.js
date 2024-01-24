import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
