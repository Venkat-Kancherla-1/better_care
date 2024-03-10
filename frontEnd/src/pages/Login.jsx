import React, { useState } from "react";
import axios from "axios";
import login from "../assets/icons/login.jpg";

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
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("username", response.data.username);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-white" style={{backgroundImage: `url(${login})`}}>
        <div className="w-3/4 lg:w-1/3 bg-white bg-opacity-80 shadow-lg rounded-lg p-8"> 
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Login</h1> 
          <form onSubmit={handleFormSubmit} className="space-y-4"> 
            <div className="flex flex-col"> 
              <label htmlFor="username" className="text-gray-600 text-sm font-medium">Username</label> 
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-600 text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex justify-end"> 
              <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-600">Sign In</button> 
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
