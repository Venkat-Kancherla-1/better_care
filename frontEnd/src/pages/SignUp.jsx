import React from "react";
import { useState } from "react";
import axios from "axios";
import signup from '../assets/icons/signup.png'
import bg from '../assets/icons/signupbg.jpg'

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, username, password);
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        username,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bg})`}}> {/* Use flexbox to center the form and set the bg image as the background with cover, center and no-repeat options */}
        <div className="flex w-3/4 lg:w-1/2 bg-white bg-opacity-80 shadow-lg rounded-lg p-8"> {/* Use responsive width, white background with opacity, shadow, rounded corners and padding for the form container */}
          <div className="w-1/2"> {/* Use half width for the form */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">SignUp</h1> {/* Use large font size, bold weight, center alignment, gray color and margin for the title */}
            <form onSubmit={handleFormSubmit} className="space-y-4"> {/* Use vertical spacing for the form elements */}
              <div className="flex flex-col"> {/* Use flexbox column for each input group */}
                <label htmlFor="name" className="text-gray-600 text-sm font-medium">Name</label> {/* Use gray color, small font size and medium weight for the label */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
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
              <div className="flex justify-end"> {/* Use flexbox to align the button to the right */}
                <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-600">Sign Up</button> {/* Use blue background, white text, bold weight, padding, rounded corners and hover effect for the button */}
              </div>
            </form>
          </div>
          <div className="w-1/2 flex justify-center items-center"> {/* Use half width for the image and use flexbox to center it vertically and horizontally */}
            <img src={signup} alt="signup icon" className="w-64 h-64"/> {/* Use larger width and height for the image */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
