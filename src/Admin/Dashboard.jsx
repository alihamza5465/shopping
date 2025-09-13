import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const adminLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  const categories = [
    { title: "New Arrivals", color: "bg-blue-500" },
    { title: "Jeans-Shirts", color: "bg-green-500" },
    { title: "Track-Suit", color: "bg-purple-500" },
    { title: "Trousers", color: "bg-red-500" },
    { title: "Hoodies & Sweatshirts", color: "bg-indigo-500" },
    { title: "Sale-Offers", color: "bg-pink-500" },
    { title: "Summer Collection", color: "bg-yellow-500" },
    { title: "Winter Collection", color: "bg-teal-500" },
  ];

  const quotes = [
    "“Work hard in silence, let your success be your noise.”",
    "“Professionalism is not a label you give yourself—it’s a description you hope others will apply to you.”",
  ];

  return (
    <div className="w-full py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Welcome Admin
      </h1>

      <div className="max-w-[80%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`${item.color} rounded-xl shadow-lg flex items-center justify-center h-60 text-white text-xl font-semibold cursor-pointer transform hover:scale-105 transition duration-300`}
          >
            <Link to={`/admin/add-product/${item.title}`}>{item.title}</Link>
          </div>
        ))}
      </div>
      <div className="text-3xl font-bold text-center text-gray-800 mb-8 pt-10">
        <button
          className="bg-black p-3 text-white cursor-pointer rounded-lg hover:bg-gray-800"
          onClick={adminLogout}
        >
          Logout
        </button>
      </div>
      <div className="mt-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center py-10 px-6 rounded-xl max-w-[80%] m-auto shadow-md">
        <h2 className="text-2xl font-bold text-white ">
          Inspiration for Today ✨
        </h2>
        <div className="space-y-4">
          {quotes.map((q, i) => (
            <p key={i} className="text-lg text-white italic">
              {q}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
