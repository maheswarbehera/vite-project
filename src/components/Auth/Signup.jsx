import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.maheswar.co.in/api/v1/user/register", formData)
        .then((res) => {
            console.log("Signup Data:", res.data);
            // Replace with a redirect to login page
        })
        .catch((err) => {
            console.error(err);
        });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="w-80 p-4 bg-gray-100 shadow-md rounded-md">
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

