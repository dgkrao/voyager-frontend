import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await registerUser(form);
      navigate("/login");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white/10 p-10 rounded-3xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        {["name", "email", "password"].map((f) => (
          <input
            key={f}
            type={f === "password" ? "password" : "text"}
            placeholder={f[0].toUpperCase() + f.slice(1)}
            className="w-full mb-4 px-4 py-3 rounded bg-black/40 border border-white/20"
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
          />
        ))}

        <button
          onClick={submit}
          className="w-full py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
