import { useEffect, useState } from "react";
import bgCover from "../assets/bg-cover.png";
import { FiMail, FiLock } from "react-icons/fi"; // Import ikon dari react-icons
import axios from "axios";
import API from "../api"
import { useNavigate } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    let token = localStorage.getItem('auth_token')
    if (token !== null) {
      navigate('/home')
    }
  }, [])

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitLogin = (e) => {
    e.preventDefault()
    if (email == "" || password == "") {
      alert("Harap isi semua field")
      return
    }

    axios.post(
      `${API}login`, 
      { email, password },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    ).then((res) => {
      let data = res.data
      if (data.success) {
        localStorage.setItem('auth_token', data.access_token)
        navigate('/home')
      } else {
        alert('Error: ' + data.message)
      }
    }).catch((err) => {
      if (err.response) {
        alert('Error: ' + err.response.data.message);
      } else if (err.request) {
        alert('Error: No response received from server.');
      } else {
        alert('Error: ' + err.message);
      }
    })
  }

  return (
    <div className="flex h-screen">
      <div className="bg-blue-100 flex-1 flex items-center justify-center">
        <img
          src={bgCover}
          alt="Diabetes Awareness"
          className="w-1/2 h-1/2 object-cover"
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full px-8">
          <h1 className="text-3xl font-bold text-black mb-2">Welcome Back!</h1>
          <p className="text-gray-500 mb-8">Please enter your detail</p>

          <form className="space-y-6" onSubmit={submitLogin}>
            <div className="relative">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Please enter your email"
                className="text-sm w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiMail size={18} />
              </span>
            </div>

            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Please enter your password"
                className="text-sm w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiLock size={18} />
              </span>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600 text-sm">Remember Me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Login Now
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <a href="/sign-up" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
