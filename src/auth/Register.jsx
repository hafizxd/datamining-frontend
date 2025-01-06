import { useEffect, useState } from "react";
import bgCover from "../assets/bg-cover.png";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import axios from "axios";
import API from "../api";
import { useNavigate } from "react-router-dom";


const Register = () => {
  useEffect(() => {
      let token = localStorage.getItem('auth_token')
      if (token !== null) {
        navigate('/home')
      }
    }, [])

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const submitRegister = (e) => {
    e.preventDefault()

    if (formData.name == "" || formData.email == "" || formData.password == "") {
      alert('Field tidak boleh kosong')
      return
    }

    if (formData.password != formData.confirm_password) {
      alert('Password dan Konfirmasi Password tidak sama')
      return
    }

    axios.post(
      `${API}register`, 
      formData,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    ).then((res) => {
      let data = res.data
      if (data.success) {
        navigate('/')
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
          alt="Register Cover"
          className="w-1/2 h-1/2 object-cover"
        />
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full px-8">
          <h1 className="text-3xl font-bold text-black mb-2">Create Account</h1>
          <p className="text-gray-500 mb-8">
            Join us today by filling out the form below
          </p>

          <form className="space-y-6" onSubmit={submitRegister}>
            <div className="relative">
              <input
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                type="text"
                placeholder="Enter your full name"
                className="text-sm w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiUser size={18} />
              </span>
            </div>

            <div className="relative">
              <input
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email"
                placeholder="Enter your email"
                className="text-sm w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiMail size={18} />
              </span>
            </div>

            <div className="relative">
              <input
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type="password"
                placeholder="Enter your password"
                className="text-sm w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiLock size={18} />
              </span>
            </div>

            <div className="relative">
              <input
                onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                type="password"
                placeholder="Confirm your password"
                className="text-sm w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiLock size={18} />
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4  rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Register Now
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <a href="/" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
