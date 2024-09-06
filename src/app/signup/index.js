import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextInput from "../../components/InputText";
import Button from "../../components/Button";
import { APP_ROUTES } from "../../configs/routes";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Signup successful!");
        window.location.href = APP_ROUTES.LOGIN;
      } else {
        const errorData = await response.json();
        alert(errorData.msg || "Signup failed!");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-white shadow p-4 rounded" style={{ width: "30%" }}>
        <h1 className="h4 fw-bold mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <TextInput
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextInput
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="d-flex justify-content-center align-items-center mt-4">
            <Button type="submit" className="btn btn-primary">
              Sign Up
            </Button>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <a href={APP_ROUTES.LOGIN} className="btn btn-link">
              Click here to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
