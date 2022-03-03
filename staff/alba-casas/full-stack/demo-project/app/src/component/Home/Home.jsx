import { useEffect, useState } from "react";
import { retrieveUser } from "../../logic";
import Container from "../Container/Container";
import "./Home.css";

const Home = ({ showProfile }) => {
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
    </Container>
  );
};

export default Home;
