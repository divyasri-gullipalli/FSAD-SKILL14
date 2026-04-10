import { useEffect, useState } from "react";
import { getUser } from "../utils/auth";
import { getUserProfile } from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const id = getUser();

    if (!id) {
      navigate("/");
    } else {
      getUserProfile(id).then(res => setUser(res.data));
    }
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="card">
          <h2>User Profile</h2>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;