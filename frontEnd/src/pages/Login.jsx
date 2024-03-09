import React from "react";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const response = await axios.post("http://localhost:5000/api/signin", {
        username,
        password,
      });
      console.log(response.data); // Log the data here
      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('username', response.data.username);
      }
    } catch (error) {
      console.log(error);
    }
  
    
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
