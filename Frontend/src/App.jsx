import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ReportPage from "./pages/report";
import MyReportsPage from "./pages/myReports";
import SignUp from "./pages/signUp"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* navlinks */}
        <Route path="/awareness" element={<div>Awareness Page</div>} />
        <Route path="/resources" element={<div>Resources Page</div>} />
        <Route path="/report" element={<ReportPage/>} />
        <Route path="/my-reports" element={<MyReportsPage/>} />
        <Route path="/support" element={<div>Support Page</div>} />
        <Route path="/signin" element={<SignUp />}/>
        <Route path="/emergency" element={<div>Emergency Page</div>} />

        {/* example routes for later */}
        {/* <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} /> */}
        {/* <Route path="/about" element={<div>About Page</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
