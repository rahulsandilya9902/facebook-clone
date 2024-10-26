import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userDetails, setUserDetails] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userDetails.username && userDetails.password) {
      alert(`Login successful for ${userDetails.username}`);
    } else {
      alert("Please fill in both fields");
    }
  };
  const handleNavigate = () => {
    navigate("/Signup");
  };

  return (
    <>
      <div className="Container">
        <div className="Container-1">
          <h1>facebook</h1>
          <p>
            <b>Connect with friends and all world around you on facebook</b>
          </p>
        </div>

        <div className="Container-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="mytext"
              placeholder="Enter your phone or username"
              value={userDetails.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="mypassword"
              placeholder="Enter your password"
              value={userDetails.password}
              onChange={handleChange}
            />
            <button className="temp1">Login</button>
          </form>

          <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">
            Forgotten password?
          </a>

          <hr />

          <button className="temp2" onClick={handleNavigate}>
            Create new account
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
