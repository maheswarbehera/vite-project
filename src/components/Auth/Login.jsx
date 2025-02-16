import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.maheswar.co.in/api/v1/user/login", formData)
        .then((res) => {
            console.log("Login Data:", res.data);
            // Replace with a redirect to dashboard
        })
        .catch((err) => {
            console.error(err);
        });
    // Replace with an API call
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-80 p-4 bg-gray-100 shadow-md rounded-md">
        <input
          type="name"
          name="username"
          placeholder="Username"
          value={formData.username}
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
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
