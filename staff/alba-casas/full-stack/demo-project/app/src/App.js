import "./App.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./component/Home/Home";
import DeleteAccount from "./component/DeleteAccount/DeleteAccount";

function App() {
  const navigate = useNavigate();
  const showLogin = () => navigate("login");
  const showRegister = () => navigate("register");
  const showDeleteAccount = () => navigate("delete-account");

  const keepTokenNShowHome = (token) => {
    sessionStorage.token = token;

    navigate("/");
  };

  return (
    <Routes>
      <Route path="/*" element={<Home onDeleteAccount={showDeleteAccount} />} />
      <Route
        path="login"
        element={
          <Login onRegister={showRegister} onLoggedIn={keepTokenNShowHome} />
        }
      />
      <Route path="register" element={<Register onLogin={showLogin} />} />
      <Route
        path="delete-account"
        element={<DeleteAccount showLogin={showLogin} />}
      />
    </Routes>
  );
}

export default App;
