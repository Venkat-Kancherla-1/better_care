import React from "react";
import { useState } from "react";
import axios from "axios";
const SignupFarmer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  let exist = false;
  let success = false;
  async function handleSignupSubmit(e) {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/signup", {
          userName: username,
          password: password,
          name: fullName,
          address: address,
          role: "Farmer",
        });
        console.log(response.data);

        if (response.data == "exist") {
          exist = true;
        } else if (response.data == "success") {
          console.log("success");
        } else {
          console.log("error");
        }
    } catch (error) {
        alert("Wrong details or server error");
        console.error(error);
    }
}

  return (
    <>
      <div className="signup">
        <form onSubmit={handleSignupSubmit}>
          <h1>Signup as Farmer</h1>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input type="text" value="Farmer" hidden />
          <button type="submit">Signup</button>
          <p className="message">
            Already registered? <a href="/LoginFarmer">Login</a>
          </p>
        </form>
        {exist && <div>Username already exists</div>}
        {success ? (
          <div>
            Signup successful. Please <a href="/LoginFarmer">login</a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default SignupFarmer;
