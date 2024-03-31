import "./assets/css/style.css";
// import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Destination from "./pages/Destination";
import PageNotFound from "./pages/PageNotFound";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Landing />} />
          <Route path="/home" element={< Landing />} />
          <Route path="destination" element={< Destination />} />
          <Route path="*" element={< PageNotFound />} />
          <Route path="crew" element={< Crew />} />
          <Route path="technology" element={< Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;