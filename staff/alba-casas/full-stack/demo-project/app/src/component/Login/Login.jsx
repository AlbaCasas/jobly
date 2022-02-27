import "./Login.css";

const Login = ({ onRegister }) => {
  const goToRegister = (event) => {
    event.preventDefault();

    onRegister();
  };
  return (
    <form className="login__form">
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
