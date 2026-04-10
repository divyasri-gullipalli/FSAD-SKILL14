import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>🔐 SecureApp</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;