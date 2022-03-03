import { useEffect, useState } from "react";
import { retrieveUser } from "../../logic";
import Container from "../Container/Container";
import "./Home.css";

const Home = ({ showProfile, showLogin }) => {
  const [name, setName] = useState();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => setName(user.name));
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <Container className="home__container">
      <h1>Welcome home, {name}!</h1>
      <button
        onClick={() => {
          showProfile();
        }}
      >
        Profile
      </button>
      <a
        href="javascript"
        onClick={(event) => {
          event.preventDefault();
          sessionStorage.token = "";
          showLogin();
        }}
      >
        Log out
      </a>
    </Container>
  );
};

export default Home;
