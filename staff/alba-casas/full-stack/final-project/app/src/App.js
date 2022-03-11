import { Routes, Route } from "react-router-dom";
import Board from "./pages/Board/Board";
import Details from "./pages/Details";
import JobListCandidate from "./pages/JobListCandidate";
import JobListCompany from "./pages/JobListCompany";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/profile" element={<Profile />} />
      <Route path="/job/:jobId" element={<Details />} />
      <Route path="/*" element={<Board />} />;
      <Route path="/job/company" element={<JobListCompany />} />;
      <Route path="/job/candidate" element={<JobListCandidate />} />;
    </Routes>
  );
}

export default App;
