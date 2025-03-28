import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { LoginRequestData } from "../services/AuthService";
import "../styles/Form.modules.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const loginRequestData: LoginRequestData = { username, password };
      const response = await login(loginRequestData);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error: any) {
      console.log("login error");
    }
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="password-block">
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={handleLogin}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
