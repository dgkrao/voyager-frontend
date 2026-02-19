import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { setAuth } from "../utils/auth";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await loginUser(form);

      // 🔑 store token + role
      setAuth(res.token, res.role);

      // 🔑 VERY IMPORTANT: store email
      localStorage.setItem("email", form.email);

      if (res.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white/10 p-10 rounded-3xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <input
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded bg-black/40 border border-white/20"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded bg-black/40 border border-white/20"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={submit}
          className="w-full py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          New here?{" "}
          <Link to="/register" className="text-indigo-400">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
