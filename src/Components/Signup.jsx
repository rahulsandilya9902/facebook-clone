import React, { useState } from "react";

function Signup() {
  const [newAccount, setNewAccount] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleNewAccountChange = (e) => {
    const { name, value } = e.target;
    setNewAccount((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCreateAccount = (e) => {
    if (newAccount.name && newAccount.email && newAccount.password) {
      alert(`Account created for ${newAccount.name}`);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>Create New Account</h2>
          <form onSubmit={handleCreateAccount}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={newAccount.name}
              onChange={handleNewAccountChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={newAccount.email}
              onChange={handleNewAccountChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={newAccount.password}
              onChange={handleNewAccountChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
