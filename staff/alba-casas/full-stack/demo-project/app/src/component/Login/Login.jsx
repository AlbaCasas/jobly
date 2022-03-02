import { authenticateUser } from "../../logic";
import "./Login.css";

const Login = ({ onRegister, onLoggedIn }) => {
  const goToRegister = (event) => {
    event.preventDefault();

    onRegister();
  };

  const login = (event) => {
    event.preventDefault();

    const {
      target: {
        email: { value: email },
        password: { value: password },
      },
    } = event;

    try {
      authenticateUser(email, password)
        .then(onLoggedIn)
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form className="login__form" onSubmit={login}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button>Login</button>
      <a onClick={goToRegister} href="javascript">
        Register
      </a>
    </form>
  );
};

export default Login;