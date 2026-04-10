import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await registerUser(form);
    alert("Registered Successfully ✅");
    navigate("/");
  };

  return (
    <div className="page">
      <div className="container">
        <div className="card">
          <h2>Register</h2>

          <div className="input-group">
            <label>Username</label>
            <input name="username" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input name="email" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>

          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;