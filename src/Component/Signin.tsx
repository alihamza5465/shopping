import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const signinSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post("http://localhost:4000/signin", values);
        console.log(res.data.user);
        localStorage.setItem("token", JSON.stringify(res.data.user));
        localStorage.setItem("role", JSON.stringify(res.data.role));
        navigate(res.data.role === "admin" ? "/admin" : "/");
        toast.success("Signin Successful");
      } catch (error) {
        toast.error("Signin Failed");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 text-gray-200 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Sign In
        </h2>

        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
            Sign Up
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
