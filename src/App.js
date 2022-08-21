import React, { useState } from 'react';


const UserForm = (props) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName,lastName, email, password ,confirmPassword };
    console.log("Welcome", newUser);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    confirmPassword("");
  };

  return (
    <>
    <form onSubmit={createUser}>
      <div>
        <label>Frist Name: </label>
        <input type="text" onChange={(e) => setFirstname(e.target.value)} value={ firstName }/>
        <label>Last Name: </label>
        <input type="text" onChange={(e) => setLastname(e.target.value)} value={ lastName }/>

        <label>Email Address: </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={ email }/>
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={ password }/>
        <label>Confirm Password: </label>
        <input type="password" onChange={(e) => setConfirmpassword(e.target.value)} value={ confirmPassword }/>
      </div>
      <input type="submit" value="Create User" />
    </form>
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
    </>
  );
};

export default UserForm;
