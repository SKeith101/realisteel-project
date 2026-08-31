import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.04, wheelMultiplier: 1.4, smoothWheel: true }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ReactLenis>
  );
}

export default App;
