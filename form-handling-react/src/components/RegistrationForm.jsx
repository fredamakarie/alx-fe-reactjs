import React, { useState } from 'react'

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    return Object.keys(newErrors).length === 0;};

    const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Complete✅");
      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
    }};

  return (
    <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
           <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
           </div>

           <div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
           </div>

           <div>
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
           </div>
           <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default RegistrationForm