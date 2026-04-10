import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/auth";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUser()) {
      navigate("/");
    }
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="card">
          <h2>Welcome 👋</h2>
          <p>You are successfully logged in</p>
        </div>
      </div>
    </div>
  );
}

export default Home;