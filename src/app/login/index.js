import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextInput from "../../components/InputText";
import Button from "../../components/Button";
import { APP_ROUTES } from "../../configs/routes";

const SignIn = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.name);
        alert("Login successful!");
        window.location.href = APP_ROUTES.WEATHER;
      } else {
        const errorData = await response.json();
        alert(errorData.msg || "Login failed!");
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
      <div
        className="bg-white shadow p-4 rounded"
        style={{ maxWidth: "30%", width: "100%" }}
      >
        <h1 className="h4 fw-bold mb-4 text-center">Sign In</h1>
        <form onSubmit={handleSubmit}>
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
          <div className="d-flex justify-content-center mb-3">
            <Button type="submit">Sign In</Button>
          </div>
          <div className="d-flex justify-content-between">
            <a href={APP_ROUTES.SIGNUP} className="btn btn-link">
              Click here to Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
