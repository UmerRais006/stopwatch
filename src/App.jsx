// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Clock from "./pages/Clock";
import Timer from "./pages/Timer";
import Alarm from "./pages/Alarm";
import StopWatch from "./pages/Stopwatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Clock />} /> 
          <Route path="timer" element={<Timer />} />
          <Route path="clock" element={<Clock />} />
          <Route path="alarm" element={<Alarm />} />
          <Route path="stopwatch" element={<StopWatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
