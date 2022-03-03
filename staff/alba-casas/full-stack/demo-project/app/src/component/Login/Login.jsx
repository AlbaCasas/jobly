import { authenticateUser } from "../../logic";
import Container from "../Container/Container";
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
    <Container className="container__login">
      <form className="login__form" onSubmit={login}>
        <label>Email</label>
        <input type="email" name="email" placeholder="email" />
        <label>Password</label>
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
      <a onClick={goToRegister} href="javascript">
        Register
      </a>
    </Container>
  );
};

export default Login;
