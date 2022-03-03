import "./App.css";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./component/Home/Home";
import DeleteAccount from "./component/DeleteAccount/DeleteAccount";
import Container from "./component/Container/Container";
import Profile from "./component/Profile/Profile";
import UpdatePassword from "./component/UpdatePassword/UpdatePassword";

function App() {
  const navigate = useNavigate();
  const showLogin = () => navigate("login");
  const showRegister = () => navigate("register");
  const showDeleteAccount = () => navigate("delete-account");
  const showUpdatePassword = () => navigate("update-password");
  const showProfile = () => navigate("profile");
  const onBack = () => navigate("-1");

  const keepTokenNShowHome = (token) => {
    sessionStorage.token = token;

    navigate("/");
  };

  return (
    <Container>
      <Routes>
        <Route
          path="/*"
          element={<Home showProfile={showProfile} showLogin={showLogin} />}
        />
        <Route
          path="login"
          element={
            <Login onRegister={showRegister} onLoggedIn={keepTokenNShowHome} />
          }
        />
        <Route path="register" element={<Register onLogin={showLogin} />} />
        <Route
          path="delete-account"
          element={<DeleteAccount showLogin={showLogin} onBack={showProfile} />}
        />
        <Route
          path="update-password"
          element={<UpdatePassword onBack={showProfile} />}
        />
        <Route
          path="profile"
          element={
            <Profile
              onBack={onBack}
              onDeleteAccount={showDeleteAccount}
              onUpdatePassword={showUpdatePassword}
            />
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
