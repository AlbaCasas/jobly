import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./pages/Board/Board";
import Details from "./pages/Details";
import JobListCandidate from "./pages/JobListCandidate";
import JobListCompany from "./pages/JobListCompany";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Context from "./Context";
import Toast from "./components/Toast";
import { MdDone, MdOutlineError, MdInfo } from "react-icons/md";

function App() {
  const [feedback, setFeedback] = useState(null);
  const clearFeedback = () => setFeedback(null);

  const [toast, setToast] = useState(null);
  const closeToast = () => {
    setToast(!toast);
  };

  return (
    <Context.Provider value={{ setFeedback }}>
      <Routes>
        <Route path="/login" element={<Login />} />;
        <Route path="/signup" element={<Signup />} />
        ;
        <Route
          path="/profile"
          element={
            <Profile
              toast={toast}
              setToast={setToast}
              closeToast={closeToast}
            />
          }
        />
        <Route
          path="/job/:jobId"
          element={
            <Details
              toast={toast}
              setToast={setToast}
              closeToast={closeToast}
            />
          }
        />
        <Route
          path="/*"
          element={<Board toast={toast} closeToast={closeToast} />}
        />
        ;
        <Route
          path="/job/company"
          element={
            <JobListCompany
              toast={toast}
              setToast={setToast}
              closeToast={closeToast}
            />
          }
        />
        ;
        <Route path="/job/candidate" element={<JobListCandidate />} />;
      </Routes>
      {feedback && (
        <Toast
          variant={feedback.level}
          icon={
            (feedback.level === "error" && <MdOutlineError />) ||
            (feedback.level === "success" && <MdDone />) ||
            (feedback.level === "info" && <MdInfo />)
          }
          closeToast={clearFeedback}
        >
          {feedback.message}
        </Toast>
      )}
    </Context.Provider>
  );
}

export default App;
