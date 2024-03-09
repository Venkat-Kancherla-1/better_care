import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const LoginStudent = () => {
  const history = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/login", {
            userName,
            password,
            role:"Student"
        });
        console.log(response);

        if (response.data.status === "exist") {
            localStorage.setItem('accessToken', response.data.accessToken);
            history("/HomeStudent", { state: { id: userName } });
            window.location.reload();
        } else if (response.data.status === "notexist") {
            alert("User has not signed up");
        }
    } catch (error) {
        alert("Wrong details or server error");
        console.error(error);
    }
}
  return (
    <>
      <div className="login">
        <h1>Login as Student</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="text" value="Student" hidden />
          <button type="submit">Login</button>
          <p className="message">
            Not registered? <a href="/SignupStudent">Create an account</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginStudent;
