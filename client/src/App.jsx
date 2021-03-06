import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './pages/Board/Board';
import Details from './pages/Details';
import JobListCandidate from './pages/JobListCandidate';
import JobListCompany from './pages/JobListCompany';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Context from './Context';
import Toast from './components/Toast';
import { MdDone, MdOutlineError, MdInfo } from 'react-icons/md';
import { retrieveUser } from './api';
import { DEFAULT_ERROR } from './constants/feedbacks';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [feedback, setFeedback] = useState(null);
  const clearFeedback = () => setFeedback(null);
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      loadUser();
    } catch {
      setFeedback(DEFAULT_ERROR);
    }
  }, []);

  const loadUser = async () => {
    try {
      const user = await retrieveUser(localStorage.token);
      setUser(user);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <Context.Provider value={{ setFeedback, user, loadUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/job/:jobId" element={<Details />} />
            <Route path="/board" element={<Board />} />
            <Route path="/" element={<Board />} />
            <Route path="/job/company" element={<JobListCompany />} />
            <Route path="/job/candidate" element={<JobListCandidate />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {feedback && (
        <Toast
          variant={feedback.level}
          icon={
            (feedback.level === 'error' && <MdOutlineError />) ||
            (feedback.level === 'success' && <MdDone />) ||
            (feedback.level === 'info' && <MdInfo />)
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
