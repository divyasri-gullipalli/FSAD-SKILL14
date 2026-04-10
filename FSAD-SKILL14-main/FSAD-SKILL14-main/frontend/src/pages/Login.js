import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/api";
import { setUser } from "../utils/auth";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);
      setUser(res.data.id);
      navigate("/home");
    } catch (err) {
      alert("Invalid username or password ❌");
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="card">
          <h2>Login</h2>

          <div className="input-group">
            <label>Username</label>
            <input name="username" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>

          <button onClick={handleLogin}>Login</button>

          <p style={{ textAlign: "center" }}>
            <Link to="/register">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;