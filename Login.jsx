import "./login.css";
import image from "../assets/img2.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    if (
      email === "priya@gmail.com" &&
      password === "1234"
    ) {
      alert("Login Successful!");
      navigate("/todo");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <div className="left-panel">
          <img src={image} alt="Login" />
        </div>

        <div className="right-panel">
          <h1>Welcome Back</h1>
          <p>Student Portal Login</p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "" : "👁"}
            </button>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
