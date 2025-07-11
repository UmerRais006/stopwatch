// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Clock from "./pages/clock";
import Timer from "./pages/timer";
import Alarm from "./pages/alarm";
import StopWatch from "./pages/stopwatch";

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
