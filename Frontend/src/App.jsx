import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ReportPage from "./pages/report";
import MyReportsPage from "./pages/myReports";
import Login from "./pages/login"
import Emergency from "./components/home/emergencyModal"
import SupportPage from "./pages/SupportPage"
import ResourcesPage from "./pages/ResourcesPage"
import "./App.css";
import Signup from "./pages/signUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* navlinks */}
        <Route path="/awareness" element={<div>Awareness Page</div>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/report" element={<ReportPage/>} />
        <Route path="/my-reports" element={<MyReportsPage/>} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/emergency" element={<Emergency/>} />

        {/* example routes for later */}
        {/* <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} /> */}
        {/* <Route path="/about" element={<div>About Page</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
