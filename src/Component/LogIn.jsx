import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <>
      <div>
        <h2>login</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
          name=""
          id=""
          className="form-control"
        />{" "}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="passwrod"
          name=""
          id=""
          className="form-control mt-2"
        />
        <button className="btn btn-outline-dark mt-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default LogIn;
