import "./App.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const showLogin = () => navigate("login");
  const showRegister = () => navigate("register");

  return (
    <Routes>
      <Route path="login" element={<Login onRegister={showRegister} />} />
      <Route path="register" element={<Register onLogin={showLogin} />} />
    </Routes>
  );
}

export default App;
