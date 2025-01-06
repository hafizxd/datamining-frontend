import { useNavigate } from "react-router-dom";
import { useState } from "react";
import defaultPct from "../assets/default_pct.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");

    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-24 p-4 border-b relative">
      <div className="flex items-center">
        <span className="font-semibold text-lg text-gray-800">
          Diabetes Predict
        </span>
      </div>

      <div className="flex space-x-6 text-sm">
        <a
          onClick={() => navigate("/home")}
          className="text-gray-600 font-normal hover:text-gray-800 cursor-pointer"
        >
          Home
        </a>
        <a
          onClick={() => navigate("/about")}
          className="text-gray-600 font-normal hover:text-gray-800 cursor-pointer"
        >
          About
        </a>
        <a
          onClick={() => {
            localStorage.removeItem('auth_token')
            navigate('/')
          }}
          className="text-gray-600 font-normal hover:text-gray-800 cursor-pointer"
        >
          Log Out
        </a>
      </div>

      <div className="flex items-center relative">
        <img
          src={defaultPct}
          alt="User Profile"
          className="mr-4 cursor-pointer"
          onClick={toggleDropdown}
        />
        <div>
          <span className="text-gray-700 font-medium capitalize text-sm">
            Welcome, user
          </span>
          <p className="text-gray-300 font text-xs">user@example.com</p>
        </div>

        {dropdownOpen && (
          <div className="absolute right-10 top-12 px-8 py-2 bg-red-100 rounded-md cursor-pointer">
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
