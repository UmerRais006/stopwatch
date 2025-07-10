
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Timer from "./pages/timer";
import Clock from "./pages/clock";
import Alarm from "./pages/alarm";
import StopWatch from "./pages/stopwatch";
import Layout from "./components/Layout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "Timer", element: <Timer /> },
      { path: "Clock", element: <Clock /> },
      { path: "Alarm", element: <Alarm /> },
      { path: "Stopwatch", element: <StopWatch /> },
    ],
  },
]);

export default function App() {



  
  return <RouterProvider router={router} />;
}
