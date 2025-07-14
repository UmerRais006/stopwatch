// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Clock from "./pages/Clock";
import Timer from "./pages/Timer";
import Alarm from "./pages/Alarm";
import StopWatch from "./pages/Stopwatch";
import Error from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Clock />} />
          <Route path="Timer" element={<Timer />} />
          <Route path="Clock" element={<Clock />} />
          <Route path="Alarm" element={<Alarm />} />
          <Route path="Stopwatch" element={<StopWatch />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
